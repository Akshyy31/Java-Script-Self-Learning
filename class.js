// class Car {
//     greet(){
//         console.log("i have new car");

//     }
// }

// let car1= new Car()
// console.log(car1.greet());

class Person {
  constructor() {
    console.log("constructr parent");
    
  }
  
 getdata() {
    console.log(`${this.name} has ${this.age}`);
  }
}

let p1 = new Person();



class A extends Person{
   constructor(){
     super()
   }
}
let p2 = new A()
