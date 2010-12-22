JS.Method.keyword('callSuper', function(receiver, args) {
  var methods    = receiver.__eigen__().lookup(this.name),
      stackIndex = methods.length - 1,
      params     = JS.array(args);
  
  receiver.callSuper = function() {
    var i = arguments.length;
    while (i--) params[i] = arguments[i];
    
    stackIndex -= 1;
    var returnValue = methods[stackIndex].callable.apply(receiver, params);
    stackIndex += 1;
    
    return returnValue;
  };
});

JS.Method.keyword('blockGiven', function(receiver, args) {
  var block = Array.prototype.slice.call(args, this.arity),
      hasBlock = (typeof block[0] === 'function');
  
  receiver.blockGiven = function() { return hasBlock };
});

JS.Method.keyword('yield', function(receiver, args) {
  var block = Array.prototype.slice.call(args, this.arity);
  
  receiver.yield = function() {
    block[0].apply(block[1] || null, arguments);
  };
});
