import { z } from "zod";

export const CASE02_typescriptTypeinfer = () => {
  console.log(`\n[ ** Use Case 02 ** ]`);
  console.log(`\n  Create Type :`);
  const UserSchema = z.object({
    name: z.string(),
    age: z.number().min(10),
    email: z.string().email().optional(),
  });

  type UserType = z.infer<typeof UserSchema>;

  const user: UserType = {
    name: "Philip",
    age: 25,
  };
  console.log(user);

  console.log(`\n  Strict type :`);
  const StrictUserSchema = z
    .object({
      name: z.string(),
      age: z.number().min(10),
      email: z.string().email().optional(),
    })
    .strict();

  const userWithAdditionalField = {
    name: "Chun",
    age: 28,
    address: "Seoul",
  };

  try {
    console.log(`\n    Parse result`);
    const userParseResult = UserSchema.parse(user);
    const userStrictParseResult = StrictUserSchema.parse(user);
    console.log(userParseResult);
    console.log(userStrictParseResult);
  } catch (e) {
    console.log("    Error Will Not Happen");
  }

  try {
    console.log(`\n    Parse result with additional field`);
    const parseResult = UserSchema.parse(userWithAdditionalField);
    const strictParseResult = StrictUserSchema.parse(userWithAdditionalField);
    console.log(parseResult);
    console.log(strictParseResult);
  } catch (e) {
    console.log("    Error Will Happen within strict parse");
  }

  console.log(`\n  Required Type:`);
  const RequiredUserSchema = z
    .object({
      name: z.string(),
      age: z.number().min(10),
      email: z.string().email().optional(),
    })
    .required();

  type RequiredUserType = z.infer<typeof RequiredUserSchema>;
  const userWithAllField: RequiredUserType = {
    name: "Jin",
    age: 30,
    email: "Jin@gmail.com",
  };
  console.log(userWithAllField);
};
