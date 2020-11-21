(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxTxCosBucket = nx.declare('nx.TxCosBucket', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTxCosBucket;
  }
})();
