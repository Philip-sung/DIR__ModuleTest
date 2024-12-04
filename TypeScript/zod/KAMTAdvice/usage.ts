import { z } from "zod";
import { Postset, Preset } from "./subfolder";

const a = Preset.ParameterSchema;
const v = Postset.ParameterSchema;

type A = z.infer<typeof a>;
type V = z.infer<typeof v>;

const K1 = z.object({
  elementType: z.literal("K1"),
  parameter: a,
});
const K3 = z.object({
  elementType: z.literal("K3"),
  parameter: v,
});
const K2 = z.object({
  elementType: z.literal("K2"),
  parameter: v,
  additionalField: z.string(),
});

const UnionType = z.union([K1, K2, K3]);

type UnionType = z.infer<typeof UnionType>;
type K1 = z.infer<typeof K1>;
type K2 = z.infer<typeof K2>;

const handleK1 = (data: K1) => {
  console.log("cusk");
};
const handleK2 = (data: K2) => {
  console.log("cusk");
};

const func = (data: UnionType): void => {
  switch (data.elementType) {
    case "K1":
      handleK1(data as K1); // type assertion is worst
      break;
    case "K2":
      handleK2(data);
      break;
    default:
      break;
  }
};
