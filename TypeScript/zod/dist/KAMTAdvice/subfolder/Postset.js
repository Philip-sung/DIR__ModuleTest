"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterSchema = void 0;
const zod_1 = require("zod");
const CommonSchema = zod_1.z.object({
    minimalThickness: zod_1.z.number(),
});
const ImplantSchema = zod_1.z.object({
    toolRadius: zod_1.z.number(),
});
const CrownSchema = zod_1.z.object({
    height: zod_1.z.string(),
});
const ParameterSchemaSet = zod_1.z.object({
    common: CommonSchema,
    implant: ImplantSchema,
    crown: CrownSchema,
});
exports.ParameterSchema = zod_1.z.object({
    name: zod_1.z.string(),
    parameter: ParameterSchemaSet,
});
