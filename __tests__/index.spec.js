(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxTxCosBucket = require('../src/next-tx-cos-bucket');
  var config = require('./config.json');
  var bucket = new NxTxCosBucket(config);

  jest.setTimeout(30 * 1e3);

  describe('NxTxCosBucket.methods', function () {
    test('gets', function (done) {
      var bucket = new NxTxCosBucket(config);
      bucket.gets().then((res) => {
        done();
      });
    });

    test('has', function (done) {
      bucket
        .has({
          Bucket: 'abc',
          Region: 'ap-chengdu'
        })
        .then((res) => {
          console.log(res);
          done();
        });
    });

    test('destroy', function (done) {
      bucket
        .destroy({
          Bucket: 'abc',
          Region: 'ap-chengdu'
        })
        .then((res) => {
          console.log(res);
          done();
        });
    });

    test('create', function (done) {
      bucket
        .create({
          Bucket: 'abc',
          Region: 'ap-chengdu'
        })
        .then((res) => {
          console.log(res);
          done();
        });
    });
  });
})();
