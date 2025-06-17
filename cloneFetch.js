// fetch("https://api.restful-api.dev/objects",{method:'GET'})
// .then((res)=> res.json() )
// .then((val)=> console.log(val))

// get method

// async function cloneFetch() {
//   let data = await fetch("https://api.restful-api.dev/objects", {
//     method: "GET",
//   });
//   let result = await data.json()
//   console.log(result[0]);

// }

// cloneFetch()

// post Method

let PhoneData = {
  name: "Apple MacBook Pro 16",
  data: {
    year: 2019,
    price: 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
  },
};

async function cloneFetch() {
  let data = await fetch("https://api.restful-api.dev/objects", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(PhoneData),
  });

  let result = await data.json();
  console.log(result);
}



cloneFetch();

