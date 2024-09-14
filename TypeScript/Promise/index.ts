const returnGotNumber = async (num: number) => {
  return {
    num: num,
    doubledNum: num * 2,
  };
};

const returnGotNumberButNotFive = async (num: number) => {
  if (num === 5) throw new Error("Not Five Man~");
  return {
    num: num,
    doubledNum: num * 2,
  };
};

const printValueFromPromiseSettledResult = (
  data: PromiseSettledResult<{ num: number; doubledNum: number }>[]
) => {
  const filteredData = data.filter(settledPromiseTypeguard);
  const extractedValue = filteredData.map((filtered) => filtered.value);
  console.log(extractedValue);
};

const settledPromiseTypeguard = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => {
  return result.status === "fulfilled";
};

const numList = [1, 2, 3, 4, 5];

const main = async () => {
  console.log("Typeguard Test");

  const promiseAllTest = await Promise.all(
    numList.map((v) => returnGotNumber(v))
  );
  console.log(promiseAllTest);

  try {
    const promiseAllTestWithPartialError = await Promise.all(
      numList.map((v) => returnGotNumberButNotFive(v))
    );
    console.log(promiseAllTestWithPartialError);
  } catch (e) {
    console.log("--ERROR--");
    console.log(e);
    console.log("---------");
  }

  const promiseAllSettledTest = await Promise.allSettled(
    numList.map((v) => returnGotNumberButNotFive(v))
  );
  console.log(promiseAllSettledTest);
  printValueFromPromiseSettledResult(
    await Promise.allSettled(numList.map((v) => returnGotNumberButNotFive(v)))
  );
};

main();
