//sum of two numbers using memoization
const toStore = {};
function sum(a, b) {
  let uniqueKey = a + "," + b;
  result = a + b;
  if (uniqueKey in toStore) {
    toStore[uniqueKey] = result;
    console.log("Result from ToStore:", toStore[uniqueKey]);
    return toStore[uniqueKey];
  }
  //
  //     computation
  //
  toStore[uniqueKey] = result;
  console.log("Result from Function", toStore[uniqueKey]);
  return result;
}

// sum(10, 20);
// sum(10, 20);
// sum(10, 20);

//sum of n numbers using memoization
const cashe = {};
function sumNnumbers(number) {
  let sum = 0;
  key = number;
  if (key in cashe) {
    console.log("sum from cashe:", cashe[key]);
    return cashe[key];
  }

  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  cashe[key] = sum;
  console.log("sum from 1 st input:", cashe[key]); //{'5':15}
  return sum;
}
// console.log(sumNnumbers(5));
// sumNnumbers(10);
// sumNnumbers(10);

// sum of numbers in array and call back

function add(a, b) {
  return a + b;
}

function memoization(callback) {
  const cashe = {};
  return function (...args) {
    let key = args.join(",");
    if (key in cashe) {
      console.log("reslut from cache", cashe[key]);

      return (cashe[key] = callback(...args));
    }

    cashe[key] = callback(...args);
    console.log("reslut from with out cache:", cashe[key]);

    return cashe[key];
  };
}

f = memoization(add);
console.log(f(1, 2));
console.log(f(1, 2));
