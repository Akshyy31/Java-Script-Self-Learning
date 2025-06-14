arr = [10, 23, 45, 64, 23, 12];
let res = arr.reduce(
  (acc, cuu) => {
    if (cuu % 2 == 0) {
      acc.even.push(cuu)
    } else {
      acc.odd.push(cuu)
    }
    return acc
  }, { even: [], odd: [] }
);

console.log(res);
