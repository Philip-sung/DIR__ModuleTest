import { z } from 'zod';

const CommonSchema = z.object({
  minimalThickness: z.number(),
});
const ImplantSchema = z.object({
  toolRadius: z.number(),
});
const CrownSchema = z.object({
  height: z.number(),
});

const ParameterSchemaSet = z.object({
  common: CommonSchema,
  implant: ImplantSchema,
  crown: CrownSchema,
});

export const ParameterSchema = z.object({
  name: z.string(),
  parameter: ParameterSchemaSet,
});
