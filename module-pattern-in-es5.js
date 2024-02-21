function stack() {
  const list = [];

  return {
    push(value) {
      list.push(value);
    },
    pop() {
      list.pop();
    },
    peekBack() {
      return list[list.length - 1];
    },
    isEmpty() {
      return !list.length;
    },
    size() {
      return list.length;
    }
  };
}
const stackModule = stack();
stackModule.push('...');


var namesCollection = (function() {
  // private members
  var objects = [];
  // public members, exposed with return statement
  return {
    addName: addObject,
  };

  // Public Method
  function addObject(object) {
    objects.push(object);
    _printMessage(object);
  }

  // Private Method - Prefixed with single underscore
  function _printMessage(object) {
    console.log("Object successfully added:", object);
  }
})();

// dependencies
var counterModule = (function (jQ) {
  var counter = 0;

  var increaseCounter = function () {
    counter++;
  }

  var getCounter = function () {
    return counter;
  }

  return {
    increaseCounter,
    getCounter
  }
})(jQuery);
