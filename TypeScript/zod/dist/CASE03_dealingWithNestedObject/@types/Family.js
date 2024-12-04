"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilySchema = void 0;
const zod_1 = require("zod");
const PersonInfoSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number().min(0),
});
const FatherSchema = zod_1.z.object({
    personInfo: PersonInfoSchema,
    role: zod_1.z.literal("father"),
});
const MotherScheam = zod_1.z.object({
    personInfo: PersonInfoSchema,
    role: zod_1.z.literal("mother"),
});
const SonSchema = zod_1.z.object({
    personInfo: PersonInfoSchema,
    role: zod_1.z.literal("son"),
    order: zod_1.z.number(),
});
exports.FamilySchema = zod_1.z.object({
    father: FatherSchema,
    mother: MotherScheam,
    son: SonSchema,
});
