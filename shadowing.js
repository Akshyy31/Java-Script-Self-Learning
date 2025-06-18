// let name="Akshay"
// function a(){
//      let name="Aju"
//      console.log(name);
//      console.log(name);

// }
// a();
// console.log(name);

// shadowing with var

// var b =10
// function sample() {
//        var b=100
//        console.log(b);
// }
// sample()
// console.log(b);

// var b=50
// {
//     var b=100
//     console.log(b);
// }
// console.log(b);    // here override the outer variable b ,,, var is not a block scope
// var b =100
// for (let i =1;i<5;i++){
//     var b=10
//     console.log(b);
// }
// console.log(b);

// shadowing using let/const

// let n = 50;
// {
//   let n = 100;
//   console.log(n); //100
// }
// console.log(n); //50

// const n = 50;
// {
//   const n = 100;
//   console.log(n); //100
// }
// console.log(n);

//  var n = 50;
// {
//   var n = 100;
//   console.log(n); //100
// }
// console.log(n);

// let n = 200
// function sample(){
//     let n=100
//     console.log(n);
// }
// sample()
// console.log(n);

// var a = 400;
// {
//   var a = 200;
//   console.log(a);
// }
// console.log(a);



var a = 200;
function s() {
  var a = 100;
  console.log(a);
}
s()           
console.log(a);
