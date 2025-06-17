// let prm = new Promise((resolve,reject) => {
//       resolve("success")
//       reject("failed")

// });

// prm.then((result)=>{
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);

// })

// promises chaining

// let prm = new Promise((resolve, reject) => {
//   console.log("Water boiling Started");
//   setTimeout(() => {
//     console.log("Water started Boiling....");
//     resolve();
//   }, 3000);
// })

// prm.then(() => console.log("Finished"));

// promises chaining

// function SerchProduct() {
//   return new Promise((resolve, reject) => {
//     console.log("Product Search Started");

//     setTimeout(() => {
//       console.log(" Serched Product completd");
//       resolve();
//     }, 4000);
//   });
// }

// function AddToCart() {
//   return new Promise((resolve, reject) => {
//     console.log("Product Add to Cart Started");
//     setTimeout(() => {
//       console.log("Add to Cart SuccessFully completed ");
//       resolve();
//     }, 3000);
//   });
// }
// function CheckOut() {
//   return new Promise((resolve, reject) => {
//     console.log("Check out Started");
//     setTimeout(() => {
//       console.log("Check out Completed ");
//       resolve();
//     }, 3000);
//   });
// }
// function placeOrder() {
//   return new Promise((resolve, reject) => {
//     console.log("Payment Starting");
//     setTimeout(() => {
//       console.log("Order Placed Completed ");
//       resolve();
//     }, 3000);
//   });
// }

// SerchProduct()
//   .then(AddToCart)
//   .then(CheckOut)
//   .then(placeOrder)
//   .then(() => {
//     console.log("Success fully Completed")})
//   .catch(() => {
//     console.log("Failed");
//   });

num = 22;
new Promise((resolve, reject) => {
  setTimeout(() => {
    if (num % 2 == 0) {
      resolve(`${num} is Even`);
    }
    reject(`${num} is Odd`);
  }, 3000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
