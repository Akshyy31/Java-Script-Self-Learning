let aa = new WeakSet()

let obj1 ={name:"Akshay"}
let obj2 ={age:23}

aa.add(obj1)
aa.add(obj2)

console.log(aa);

let weakSet = new WeakSet();
let obj1 = {};
let obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet);
