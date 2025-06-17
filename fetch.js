fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((val)=> {
    // console.log(val);    
    console.log(val[0].rating.count);
    
  }
)
  .catch(()=> console.log("error"));


  

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((val) => console.log(val))
//   .catch(() => console.log("error"));
