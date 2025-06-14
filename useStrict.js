// "use strict"
// x= 1.4
// console.log(x);

// function sample(){
//    let  y=12
//     console.log(y)
// }
//  sample()
//
// a=10
// delete a;
// console.log(a);

// let c = function count() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// };

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
    if (i == 5) {
      setTimeout(() => {
        console.log("Done");
      }, 1000);
    }
  }, i * 1000);
}

for ( let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);   
    },i*2000)
}

// concat 

// nums1=[0]
// nums2=[1]

// arr=nums1.concat(nums2)

// function s(a,b){
//     return a-b
// }
// console.log(arr.sort(s));
// arr=[-5,-5,-10]

// // for(let i=0;i<=arr.length-1;i++){
//     res= arr[arr.length-1]-arr[0]
//     console.log(res);  
// // }
arr=[-5,-10,-5,1]
res=arr[arr.length-1]-arr[0]
console.log(res);



