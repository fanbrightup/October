function fn(){
  console.log(arguments.length);
  console.log('________');
  console.log(Object.keys(arguments));
  console.log(arguments);

}
fn(1,2);
