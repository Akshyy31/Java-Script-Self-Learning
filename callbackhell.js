setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
      setTimeout(() => {
        throw new Error("Error hAppen");
        console.log(5);
        setTimeout(() => {
          console.log(1);
        }, 4000);
      }, 4000);
    }, 4000);
  }, 4000);
}, 4000);
