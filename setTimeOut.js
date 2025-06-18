// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 2000);
//   if (i === 5) {
//     setTimeout(() => {
//       console.log("DONE");
//     },i*2000);
//   }
// }



// let count = 0;
// let a = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 6) {
//     clearInterval(a);
//   }
// },1000); 

// using name function 

function sample(){
    console.log("hi");
}

setInterval(sample,2000)

