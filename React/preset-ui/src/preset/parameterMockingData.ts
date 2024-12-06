import { Preset } from "./@type";

const baseCommonParameter: Preset.CommonParameter = {
  occlusalDistance: 1,
  proximalDistance: 1,
};

const baseInnerParameter: Preset.RestorationTypeSpecificParameter = {
  outputMethod: Preset.FabricationMethodType.MILLING,
  material: Preset.MaterialType.PMMA,
  toolRadius: 0,
  cementGap: 0,
  adaptiveExtraGap: 0,
  minimalThickness: 0,
  heightForMinimalGap: 0,
  marginWidth: 0,
  marginAngle: 60,
};

const defaultPreset: Preset.Preset = {
  accountId: "sampleId",
  lifecycle: "CREATED",
  id: "666f100020c",
  name: "defaultPreset",
  order: 0,
  common: structuredClone(baseCommonParameter),
  crown: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  implant: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  inOnlay: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
};

const SecondPreset: Preset.Preset = {
  accountId: "sampleId",
  lifecycle: "CREATED",
  id: "666f100020c",
  name: "secondPreset",
  order: 0,
  common: structuredClone(baseCommonParameter),
  crown: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  implant: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  inOnlay: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
};

const ThirdPreset: Preset.Preset = {
  accountId: "sampleId",
  lifecycle: "CREATED",
  id: "666f100020c",
  name: "thirdPreset",
  order: 0,
  common: structuredClone(baseCommonParameter),
  crown: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  implant: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
  inOnlay: (() => {
    const res = structuredClone(baseInnerParameter);
    res.outputMethod = Preset.FabricationMethodType.MILLING;
    return res;
  })(),
};

export const MockedPresetList: Preset.Preset[] = [
  defaultPreset,
  SecondPreset,
  ThirdPreset,
];
