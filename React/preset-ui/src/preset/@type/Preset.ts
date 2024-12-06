import { z } from "zod";

export type EnumLike<Data extends Record<string, unknown>> = Data[keyof Data];

export const RestorationType = {
  CROWN: "crown",
  IN_ONLAY: "inOnlay",
  IMPLANT: "implant",
} as const;
export type RestorationType = EnumLike<typeof RestorationType>;

export const FabricationMethodType = {
  PRINTER3D: "printer3d",
  MILLING: "milling",
} as const;
export type FabricationMethodType = EnumLike<typeof FabricationMethodType>;

export const MaterialType = {
  PMMA: "pmma",
  ZIRCONIA: "zirconia",
} as const;
export type MaterialType = EnumLike<typeof MaterialType>;

const CommonParameterSchema = z.object({
  occlusalDistance: z.number(),
  proximalDistance: z.number(),
});

const RestorationTypeSpecificParameterSchema = z.object({
  outputMethod: z.string(),
  material: z.string().optional(),
  toolRadius: z.number().optional(),
  cementGap: z.number(),
  adaptiveExtraGap: z.number(),
  minimalThickness: z.number(),
  heightForMinimalGap: z.number(),
  marginWidth: z.number(),
  marginAngle: z.number(),
});

export const PresetSchema = z.object({
  accountId: z.string(),
  lifecycle: z.string(),
  id: z.string(),
  name: z.string(),
  order: z.number(),
  common: CommonParameterSchema,
  crown: RestorationTypeSpecificParameterSchema,
  inOnlay: RestorationTypeSpecificParameterSchema,
  implant: RestorationTypeSpecificParameterSchema,
});

export type CommonParameter = z.infer<typeof CommonParameterSchema>;
const setCommonDesignParameterInputSchema = CommonParameterSchema.partial();
export type SetCommonParameterInput = z.infer<
  typeof setCommonDesignParameterInputSchema
>;

export type RestorationTypeSpecificParameter = z.infer<
  typeof RestorationTypeSpecificParameterSchema
>;
const setRestorationTypeSpecificParameterInputSchema =
  RestorationTypeSpecificParameterSchema.partial();
export type SetRestorationTypeSpecificParameterInput = z.infer<
  typeof setRestorationTypeSpecificParameterInputSchema
>;

export const InnerParameterSchema = z.intersection(
  CommonParameterSchema,
  RestorationTypeSpecificParameterSchema
);

export type InnerParameter = z.infer<typeof InnerParameterSchema>;

export type Preset = z.infer<typeof PresetSchema>;
const setPresetInputSchema = PresetSchema.partial();
export type SetPresetInput = z.infer<typeof setPresetInputSchema>;

export type PresetListState = {
  GET: () => Preset[];
  SET: (presetList: Preset[]) => void;
};

export type SelectedPresetState = {
  GET: () => string;
  SET: (presetName: string) => void;
};

export type PresetState = {
  GET: () => Preset;
  SET: (preset: Preset) => void;
};
export type CommonParameterState = {
  GET: () => CommonParameter;
  SET: (param: CommonParameter) => void;
};
export type RestorationTypeSpecificParameterState = {
  GET: () => RestorationTypeSpecificParameter;
  SET: (param: RestorationTypeSpecificParameter) => void;
};
