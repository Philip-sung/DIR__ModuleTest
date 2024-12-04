"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CASE03_dealingWithNestedObject = void 0;
const _types_1 = require("./@types");
const CASE03_dealingWithNestedObject = () => {
    console.log(`\n[ ** Use Case 03 ** ]`);
    const familySchema = _types_1.Family.FamilySchema;
    const sonSchema = _types_1.Family.FamilySchema.shape.son;
    const fatherSchema = _types_1.Family.FamilySchema.shape.father;
    const motherSchema = _types_1.Family.FamilySchema.shape.mother;
    const personInfoSchema = _types_1.Family.FamilySchema.shape.mother.shape.personInfo;
    const sameAgeNamePerson = { name: "Robert Downey", age: 40 };
    const mother = {
        personInfo: sameAgeNamePerson,
        role: "mother",
    };
    const son = {
        personInfo: sameAgeNamePerson,
        role: "son",
        order: 1,
    };
    const father = {
        personInfo: sameAgeNamePerson,
        role: "father",
    };
    const family = {
        father,
        mother,
        son,
    };
    const parseResult = familySchema.parse(family);
    console.log(parseResult);
};
exports.CASE03_dealingWithNestedObject = CASE03_dealingWithNestedObject;
