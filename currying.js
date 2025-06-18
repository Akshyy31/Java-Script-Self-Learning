
// function add (a){
//     return function add(b){
//         return a+b
    
//     }
// }

// console.log(add(5)(4));


// currying with aroow 

let add = (a) => (b) => a+b

console.log(add(10)(20));
