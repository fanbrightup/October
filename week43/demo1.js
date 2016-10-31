var util = require('util');
function Base(){
}
  Base.prototype.name = 'fan';
  Base.prototype.method = function(){
    console.log('hhh');
}
function Derive(){

}
util.inherits(Derive,Base);
var obj = new Derive();
// obj.sayHello('fan');
console.log(obj.name);
obj.method();
