// main file
require.config({
  paths: {
    'backbone': '../../../..',
    'appView': 'views/app'
  }
});

require(['appView'], function (AppView) {
  new AppView;
});

// another file
define('appView', ['backbone'], function (Backbone) {
  let App = Backbone.View.extend({
    initialize() {
      console.log('hillou');
    }
  });

  return App;
});

// example 2:
// A module_id (myModule) is used here for demonstration purposes only

define('myModule',
  ['foo', 'bar'],
  // module definition function
  // dependencies (foo and bar) are mapped to function parameters
  function (foo, bar) {
    // return a value that defines the module export
    // (i.e the functionality we want to expose for consumption)

    // create your module here
    var myModule = {
      doStuff: function () {
        console.log('Yay! Stuff');
      }
    }

    return myModule;
  });

// An alternative example could be..
define('myModule',
  ['math', 'graph'],
  function (math, graph) {

    // Note that this is a slightly different pattern
    // With AMD, it's possible to define modules in a few
    // different ways due as it's relatively flexible with
    // certain aspects of the syntax
    return {
      plot: function (x, y) {
        return graph.drawPie(math.randomGrid(x, y));
      }
    }
  }
);

// AMD: require()
require(['foo', 'bar'], function ( foo, bar ) {
  // rest of your code here
  foo.doSomething();
});

// Dynamically-loaded Dependencies
define(function ( require ) {
  var isReady = false, foobar;

  // note the inline require within our module definition
  require(['foo', 'bar'], function (foo, bar) {
    isReady = true;
    foobar = foo() + bar();
  });

  // we can still return a module
  return {
    isReady: isReady,
    foobar: foobar
  };
});

// With AMD, it's possible to load in assets of almost any kind
// including text-files and HTML. This enables us to have template
// dependencies which can be used to skin components either on
// page-load or dynamically.
define(['./templates', 'text!./template.md','css!./template.css'],
  function( templates, template ){
    console.log(templates);
    // do some fun template stuff here.
  }
});
