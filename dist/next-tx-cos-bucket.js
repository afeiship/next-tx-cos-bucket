/*!
 * name: @feizheng/next-tx-cos-bucket
 * description: Tencent cos bucket for next.
 * homepage: https://github.com/afeiship/next-tx-cos-bucket
 * version: 1.0.0
 * date: 2020-04-29T08:28:08.906Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var COS = require('cos-nodejs-sdk-v5');
  var Promise = require('bluebird');
  var DEFAULT_OPTIONS = {
    SecretId: 'COS_SECRETID',
    SecretKey: 'COS_SECRETKEY'
  };

  var API_HOOKS = {
    del: 'deleteBucketAsync',
    gets: 'getServiceAsync'
  };

  var NxTxCosBucket = nx.declare('nx.TxCosBucket', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.cos = new COS(this.options);
        Promise.promisifyAll(this.cos, { context: this.cos });
      },
      'put,get,del,head,gets': function (inName) {
        return function (inOptions) {
          this.parseOptions(inOptions);
          return this.cos[API_HOOKS[inName] || inName + 'BucketAsync'](inOptions);
        };
      },
      destroy: function (inOptions) {
        var self = this;
        return new Promise(function (resolve, reject) {
          self.has(inOptions).then(function (ret) {
            if (ret) {
              self
                .del(inOptions)
                .then(function (response) {
                  resolve(response);
                })
                .catch(function (err) {
                  reject(err);
                });
            } else {
              resolve(null);
            }
          });
        });
      },
      create: function (inOptions) {
        var self = this;
        var options = nx.mix(null, { ACL: 'public-read' }, inOptions);
        return new Promise(function (resolve, reject) {
          self.has(inOptions).then(function (ret) {
            if (!ret) {
              self
                .put(options)
                .then(function (response) {
                  resolve(response);
                })
                .catch(function (err) {
                  reject(err);
                });
            } else {
              resolve(null);
            }
          });
        });
      },
      has: function (inOptions) {
        var self = this;
        return new Promise(function (resolve, reject) {
          self
            .head(inOptions)
            .then(function () {
              resolve(true);
            })
            .catch(function (err) {
              resolve(false);
            });
        });
      },
      parseOptions: function (inOptions) {
        if (!inOptions) return;
        var appId = this.options.id;
        var bucket = inOptions.Bucket;
        bucket && (inOptions.Bucket = bucket.includes(appId) ? bucket : bucket + '-' + appId);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxCosBucket;
  }
})();

//# sourceMappingURL=next-tx-cos-bucket.js.map
