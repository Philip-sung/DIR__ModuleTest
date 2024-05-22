import * as axios from "axios";

const serverCommunicator = axios.default;

// use dummy server : https://jsonplaceholder.typicode.com/
// All HTTP methods are supported. You can use http or https for your requests.
// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

serverCommunicator
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((val) => {
    console.log(Object.keys(val));
  });

serverCommunicator.get("https://philsung.com").then((val) => {
  console.log(Object.keys(val));
});
