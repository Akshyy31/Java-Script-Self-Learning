// let person={
//     name:"Akshay",
//     age:23,
//     palce: {address:"Vatakara"}
// }
// let obj=person


// console.log(person);

// obj.name="sam"


// console.log(obj);
// console.log(person);


let ar1=[10,20,[30,40],50,60]

let ar2=[...ar1]

console.log(ar1);
console.log(ar2);


ar1[2].push(99)
ar1.push(100)

console.log(ar1);
console.log(ar2);














// console.log(Object.keys(person).length);

// function Duplicate(arr) {
//   let set = new Set()
//     arr.map((element) => {
//     if(!set.has(element)){
//         set.add(element)
//     }
//   })
//    console.log([...set]);
// }

// Duplicate([1,2,3,3,3,4,5,6])