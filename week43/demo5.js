function print(data){
  console.log(data);
}
function f(){
  let x = 1;
  print(x);
  {
    let x = 2;
    print(x);
  }
  print(x);
}
// f2函数
function f2(){
  let x = 1;
  {
    print(x);
    // let x = 2;
    print(x);
  }
}
f2();
