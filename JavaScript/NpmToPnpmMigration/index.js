import * as xmlbuilder from "xmlbuilder";

const xml = xmlbuilder.create("root").ele("child").end({ pretty: true });

console.log(xml);
