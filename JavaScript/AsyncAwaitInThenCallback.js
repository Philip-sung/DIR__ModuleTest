const mainFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("mainFunction Resolved in 1 sec.");
    }, 2000);
  });
};
const asyncFunction = async () => {
  const result = await waitForThreeSecond();
  console.log(result);

  return true;
};

const waitForThreeSecond = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3 second wasted");
      resolve("asyncFunction Resolved in 3 sec.");
    }, 4000);
  });
};

let second = 0;
const intervalId = setInterval(() => {
  console.log(second);
  second++;

  if (second > 6) {
    clearInterval(intervalId);
  }
}, 1000);

mainFunction().then(async (result) => {
  console.log(result);
  await asyncFunction();
  console.log("No Wait");
});
