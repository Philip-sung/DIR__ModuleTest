const axios = require("axios").default;

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: {},
});

instance.get("/posts").then((v) => console.log(v));
