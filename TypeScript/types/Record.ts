type Transaction = {
  price: number;
  productId: `${number}${number}${number}${number}`;
};

const transactionAllStore: Record<string, Transaction> = {
  dummyStore: { price: 3400, productId: "1009" },
  philipStore: { price: 3000, productId: "3928" },
  chunnyStore: { price: 7000, productId: "4921" },
};
