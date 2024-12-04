import { z } from "zod";
import { Family } from "./@types";

export const CASE03_dealingWithNestedObject = () => {
  console.log(`\n[ ** Use Case 03 ** ]`);
  const familySchema = Family.FamilySchema;

  const sonSchema = Family.FamilySchema.shape.son;
  const fatherSchema = Family.FamilySchema.shape.father;
  const motherSchema = Family.FamilySchema.shape.mother;

  const personInfoSchema = Family.FamilySchema.shape.mother.shape.personInfo;

  type FamilyType = z.infer<typeof familySchema>;

  type SonType = z.infer<typeof sonSchema>;
  type FatherType = z.infer<typeof fatherSchema>;
  type MotherType = z.infer<typeof motherSchema>;

  type PersonInfoType = z.infer<typeof personInfoSchema>;

  const sameAgeNamePerson: PersonInfoType = { name: "Robert Downey", age: 40 };

  const mother: MotherType = {
    personInfo: sameAgeNamePerson,
    role: "mother",
  };

  const son: SonType = {
    personInfo: sameAgeNamePerson,
    role: "son",
    order: 1,
  };

  const father: FatherType = {
    personInfo: sameAgeNamePerson,
    role: "father",
  };

  const family: FamilyType = {
    father,
    mother,
    son,
  };

  const parseResult = familySchema.parse(family);
  console.log(parseResult);
};
