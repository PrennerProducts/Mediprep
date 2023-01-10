export var IDGenerator = {};
IDGenerator.Singleton = (function() {
  var singletonInstance;  
  function constructor() {
    var id = -1;
    return {
      getNextID: function() {
        id++;
        return id;
      }
    }
  }
  return {
    getInstance: function() {
      if(!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;           
    }           
  }
})(); 