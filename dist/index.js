/*!
 * name: @jswork/next-tx-cos-bucket
 * description: Tencent cos bucket for next.
 * homepage: https://github.com/afeiship/next-tx-cos-bucket
 * version: 1.0.0
 * date: 2020-11-21 11:00:35
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxTxCosBucket = nx.declare('nx.TxCosBucket', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxCosBucket;
  }
})();
