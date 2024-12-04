import { z } from "zod";

export const CASE01_simplaCase = () => {
  console.log(`\n[ ** Use Case 01 ** ]`);
  const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
  });

  const userData = {
    name: "홍길동",
    age: 25,
    email: "hong@example.com",
  };

  const parseResult = UserSchema.safeParse(userData);

  console.log(parseResult);
};
