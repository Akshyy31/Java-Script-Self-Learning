function SerchProduct() {
  return new Promise((resolve, reject) => {
    console.log("Product Search Started");

    setTimeout(() => {
      console.log(" Serched Product completd");
      resolve();
    }, 4000);
  });
}

function AddToCart() {
  return new Promise((resolve, reject) => {
    console.log("Product Add to Cart Started");
    setTimeout(() => {
      console.log("Add to Cart SuccessFully completed ");
      resolve();
    }, 3000);
  });
}
function CheckOut() {
  return new Promise((resolve, reject) => {
    console.log("Check out Started");
    setTimeout(() => {
      console.log("Check out Completed ");
      resolve();
    }, 3000);
  });
}
function placeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Payment Starting");
    setTimeout(() => {
      console.log("Order Placed Completed ");
      resolve();
    }, 3000);
  });
}

async function run() {
  try {
    await SerchProduct();
    await AddToCart();
    await CheckOut();
    await placeOrder();
    console.log("Finished");
  }
   catch (error) {
    console.log("Failed");
  }
}
run();
