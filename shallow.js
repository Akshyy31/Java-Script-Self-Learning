// let arr1=[[10,20],[30,50],60]

// let arr2=[...arr1]

// console.log(arr1);
// console.log(arr2);

// arr1[0].push(90)

// console.log(arr1);
// console.log(arr2);


let obj1=[{name:"Akshay"},{name:"sam"}]

// let obj2=[...obj1]

// obj2.push(99)
// obj2[0].name="yadu"
// console.log(obj1);
// console.log(obj2);

let obj2=JSON.parse(JSON.stringify(obj1))

obj1[0].name="Yadu"
console.log(obj1);
console.log(obj2);
