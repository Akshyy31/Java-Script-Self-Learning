// var a = 200; //this is posible
// {
//   let a = 100;
//   console.log(a);
// }

// let b = 100      // illegal scope

// {                 // here let and const are block scope , and var is Function scoped which can  cause unexpected behaviour and error
//     var b =300
// }

// let a=10;
// function sample (){
// let a =2000
//     {
//         var a =200
//         console.log(a);
//     }

// // }
// sample()
// var b = 400
// function a (){
//     var b=300
//     console.log(b);

// }
// console.log(b);
// a()

student = [
  { name: "akshay", score: 78 },
  { name: "sam", score: 100 },
  { name: "ajay", score: 95 },
];

stud = student.filter(function (element){
  if (element.score > 90) {
    console.log(element);
  }
});


// let newArr=student.map((e)=> e.name)
// console.log(newArr);
