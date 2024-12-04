"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const subfolder_1 = require("./subfolder");
const a = subfolder_1.Preset.ParameterSchema;
const v = subfolder_1.Postset.ParameterSchema;
const K1 = zod_1.z.object({
    elementType: zod_1.z.literal("K1"),
    parameter: a,
});
const K3 = zod_1.z.object({
    elementType: zod_1.z.literal("K3"),
    parameter: v,
});
const K2 = zod_1.z.object({
    elementType: zod_1.z.literal("K2"),
    parameter: v,
    additionalField: zod_1.z.string(),
});
const UnionType = zod_1.z.union([K1, K2, K3]);
const handleK1 = (data) => {
    console.log("cusk");
};
const handleK2 = (data) => {
    console.log("cusk");
};
const func = (data) => {
    switch (data.elementType) {
        case "K1":
            handleK1(data); // type assertion is worst
            break;
        case "K2":
            handleK2(data);
            break;
        default:
            break;
    }
};
