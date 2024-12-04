import { z } from "zod";

const PersonInfoSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
});

const FatherSchema = z.object({
  personInfo: PersonInfoSchema,
  role: z.literal("father"),
});

const MotherScheam = z.object({
  personInfo: PersonInfoSchema,
  role: z.literal("mother"),
});

const SonSchema = z.object({
  personInfo: PersonInfoSchema,
  role: z.literal("son"),
  order: z.number(),
});

export const FamilySchema = z.object({
  father: FatherSchema,
  mother: MotherScheam,
  son: SonSchema,
});
