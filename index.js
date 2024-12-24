// var a = 10;
// function square (number){
//     var result=number*number;
//     return result;
// }
// var squareA = square(18);
// var squareB = square(a)
pr();
console.log(a);
console.log(pr);
var a = 10;

function pr() {
  console.log("Lets print for Hoisting");
}

//Hoisting
function a() {
  b();
  function b() {
    console.log(x);
  }
}
var x = 10;
a();
