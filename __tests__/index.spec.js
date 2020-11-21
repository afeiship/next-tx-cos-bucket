(function () {
  const NxTxCosBucket = require('../src');

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

    test.only('destroy', function (done) {
      bucket
        .destroy({
          Bucket: '19967-03-1301823685',
          Region: 'ap-beijing-fsi'
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
