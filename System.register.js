import { p as q } from './dep';

var s = 'local';

export function func() {
  return q;
}

export class C {
}


// Will generate:
System.register(['./dep'], function($__export, $__moduleContext) {
  var s, C, q;
  function func() {
    return q;
  }
  $__export('func', func);
  return {
    setters: [
      // every time a dependency updates an export,
      // this function is called to update the local binding
      // the setter array matches up with the dependency array above
      function(m) {
        q = m.p;
      }
    ],
    execute: function() {
      // use the export function to update the exports of this module
      s = 'local';
      $__export('C', C = $traceurRuntime.createClass(...));
      var moduleName = $__moduleContext.id;
    }
  };
});
