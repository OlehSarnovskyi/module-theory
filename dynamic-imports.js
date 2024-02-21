// мы не можем динамически задавать никакие из параметров import.

// Во-вторых, мы не можем делать импорт в зависимости от условий или в процессе выполнения.

// import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.

// Динамический импорт работает в обычных скриптах, он не требует указания script type="module".

// import() is not a function, it's syntax sugar

let modulePath = prompt("Какой модуль загружать?");

import(modulePath)
  .then(obj => {
    // do smth
  })
  .catch(err => new Error('this module not found'))

// Или если внутри асинхронной функции
async function asyncFunction() {
  let module = await import(modulePath)
}


// example 2
// 📁 say.js
export function hi() {
  alert(`Привет`);
}

export function bye() {
  alert(`Пока`);
}

let {hi, bye} = await import('./say.js');

hi();
bye();


// WITH DEFAULT
export default function() {
  alert("Module loaded (export default)!");
}

let obj = await import('./say.js');
let say = obj.default;
// или, одной строкой: let {default: say} = await import('./say.js');

say();
