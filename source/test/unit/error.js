JS.Test.Unit.extend({
  Error: new JS.Class({
    extend: {
      SINGLE_CHARACTER: 'E'
    },
    
    initialize: function(testName, exception) {
      this._testName  = testName;
      this._exception = exception;
    },
    
    singleCharacterDisplay: function() {
      return this.klass.SINGLE_CHARACTER;
    },
    
    message: function() {
      return this._exception.name + ': ' + this._exception.message;
    },
    
    shortDisplay: function() {
      return this._testName + ': ' + this.message().split('\n')[0];
    },
    
    longDisplay: function() {
      var string = 'Error:\n' + this._testName + ':\n',
          trace  = JS.Console.filterBacktrace(this._exception.stack || '');
      
      if (trace && JS.Test.showStack)
        string += trace;
      else
        string += this.message();
      
      return string;
    },
    
    toString: function() {
      return this.longDisplay();
    }
  })
});

