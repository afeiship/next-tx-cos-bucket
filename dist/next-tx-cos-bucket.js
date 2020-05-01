/*!
 * name: @feizheng/next-tx-cos-bucket
 * description: Tencent cos bucket for next.
 * homepage: https://github.com/afeiship/next-tx-cos-bucket
 * version: 1.0.2
 * date: 2020-05-01T02:26:53.210Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxTxAbstractCos = require('@feizheng/next-tx-abstract-cos');
  var Promise = require('bluebird');

  var API_HOOKS = {
    del: 'deleteBucketAsync',
    gets: 'getServiceAsync'
  };

  var NxTxCosBucket = nx.declare('nx.TxCosBucket', {
    extends: NxTxAbstractCos,
    methods: {
      'put,get,del,head,gets': function (inName) {
        return function (inOptions) {
          this.parseOptions(inOptions);
          return this.cos[API_HOOKS[inName] || inName + 'BucketAsync'](inOptions);
        };
      },
      destroy: function (inOptions) {
        var self = this;
        return new Promise(function (resolve) {
          self
            .has(inOptions)
            .then(function (ret) {
              if (ret) {
                self.del(inOptions).then(resolve).catch(resolve);
              } else {
                resolve(null);
              }
            })
            .catch(resolve);
        });
      },
      create: function (inOptions) {
        var self = this;
        var options = nx.mix(null, { ACL: 'public-read' }, inOptions);
        return new Promise(function (resolve) {
          self
            .has(options)
            .then(function (ret) {
              if (!ret) {
                self.put(options).then(resolve).catch(resolve);
              } else {
                resolve(null);
              }
            })
            .catch(resolve);
        });
      },
      has: function (inOptions) {
        var self = this;
        return new Promise(function (resolve) {
          self
            .head(inOptions)
            .then(function () {
              resolve(true);
            })
            .catch(function () {
              resolve(false);
            });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxCosBucket;
  }
})();

//# sourceMappingURL=next-tx-cos-bucket.js.map
