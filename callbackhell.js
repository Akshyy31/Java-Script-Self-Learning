// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(3);
//     setTimeout(() => {
//       console.log(4);
//       setTimeout(() => {
//         throw new Error("Error hAppen");
//         console.log(5);
//         setTimeout(() => {
//           console.log(1);
//         }, 4000);
//       }, 4000);
//     }, 4000);
//   }, 4000);
// }, 4000);

function task1(callback) {
  setTimeout(() => {
    console.log("task one");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task two");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task three");
    callback();
  }, 1000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("task four");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {});
    });
  });
});
