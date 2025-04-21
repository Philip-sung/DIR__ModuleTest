import z from "zod";

export const CASE05_ZodTests = () => {
  const dateString = z
    .string()
    .datetime()
    .safeParse("2025-04-21T02:44:28.353Z");
  if (!dateString.success) {
    console.log(dateString.error.format());
    throw new Error("Failed!");
  }
  console.log(dateString.data);
};
