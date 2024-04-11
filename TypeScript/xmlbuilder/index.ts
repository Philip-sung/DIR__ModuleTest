import xmlbuilder from "xmlbuilder";
import * as fs from "fs";

// Create XML
const xml = xmlbuilder.create("test");

// Check xml
console.log(xml);

// Manipulate xml
xml.ele("TagNameA");
xml.ele("TagNameB", "ContentB");
xml.ele("TagNameC", "TextC");
xml.ele("TagNameD", { attributeD: "attributeD" }, "TextD");
xml.ele(
  "TagNameE",
  { attributeE: "attributeE", secAttE: "secondAttributeE" },
  "TextD"
);

// Convert xml to string
const xmlString = xml.end();

// Convert xml to neat string
const xmlStringPretty = xml.end({ pretty: true });

writeToFile("./test.xml", xmlStringPretty);

function writeToFile(path: string, data: string) {
  fs.writeFileSync(path, data, "utf-8");
}
