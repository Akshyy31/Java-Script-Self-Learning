// console.log("hi");
// setTimeout(()=>{
//     console.log("akshay");
// },2000);
// console.log("End");

// function sumOFdigit(n) {
//   let number = String(n);
//   arr = number.split("");
//   console.log(number);
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + Number(arr[i]);
//   }
//   return sum;
// }

// console.log(sumOFdigit(113));

var plusOne = function (digits) {
  
  if (digits[digits.length-1] == 9) {
    let last=digits[digits.length-1]+1
     result=String(last).split("").map(Number)
    // result = last.split("").map(Number)
     digits.splice([digits.length-1],[digits.length-1],result)
     let deg=digits.flat()
     return deg;
  }else
  {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
     return digits;
  }
 
};
console.log(plusOne([9]));



