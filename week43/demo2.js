var util = require('util');
var a = '1';
function Base(){

  this.name = 'Base name';
  this.sayHello = function (){
    console.log('hello'+this.name);
  }
  // console.log(this);
}
  Base.prototype.method = function(){
    console.log('base method called');
  }
  Base.prototype.sayHello = new Base().sayHello;
function Derived(name){
  this.name = name;
  // console.log(this);
}
util.inherits(Derived,Base);
// var obj = new Derived('fanbright');
var obj = new Derived;
obj.method();
obj.sayHello();
// console.log(obj.constructor);
console.log(util.inspect(Base));
