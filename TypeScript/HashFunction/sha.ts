import { createHash } from "crypto";

function createSHA1Hash(message: string) {
  const hashValue = createHash("sha1").update(message).digest("hex");
  console.log(hashValue);
  return hashValue;
}

createSHA1Hash("Hello,World");
