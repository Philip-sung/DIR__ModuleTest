import { createHash } from "crypto";
import * as fs from "fs";

const fileContent = fs.readFileSync("./test.png");

console.log(typeof fileContent);

const fileBlob = new Blob([fileContent]);

const buffer = Buffer.from(await fileBlob.arrayBuffer());
const hash = createHash("md5");
hash.update(buffer);
const contentMD5 = hash.digest("base64");

console.log({ contentMD5, contentLength: fileBlob.size });
