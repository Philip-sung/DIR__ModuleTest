"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CASE02_typescriptTypeinfer = void 0;
const zod_1 = require("zod");
const CASE02_typescriptTypeinfer = () => {
    console.log(`\n[ ** Use Case 02 ** ]`);
    console.log(`\n  Create Type :`);
    const UserSchema = zod_1.z.object({
        name: zod_1.z.string(),
        age: zod_1.z.number().min(10),
        email: zod_1.z.string().email().optional(),
    });
    const user = {
        name: "Philip",
        age: 25,
    };
    console.log(user);
    console.log(`\n  Strict type :`);
    const StrictUserSchema = zod_1.z
        .object({
        name: zod_1.z.string(),
        age: zod_1.z.number().min(10),
        email: zod_1.z.string().email().optional(),
    })
        .strict();
    const userWithAdditionalField = {
        name: "Chun",
        age: 28,
        address: "Seoul",
    };
    try {
        console.log(`\n    Parse result`);
        const userParseResult = UserSchema.parse(user);
        const userStrictParseResult = StrictUserSchema.parse(user);
        console.log(userParseResult);
        console.log(userStrictParseResult);
    }
    catch (e) {
        console.log("    Error Will Not Happen");
    }
    try {
        console.log(`\n    Parse result with additional field`);
        const parseResult = UserSchema.parse(userWithAdditionalField);
        const strictParseResult = StrictUserSchema.parse(userWithAdditionalField);
        console.log(parseResult);
        console.log(strictParseResult);
    }
    catch (e) {
        console.log("    Error Will Happen within strict parse");
    }
    console.log(`\n  Required Type:`);
    const RequiredUserSchema = zod_1.z
        .object({
        name: zod_1.z.string(),
        age: zod_1.z.number().min(10),
        email: zod_1.z.string().email().optional(),
    })
        .required();
    const userWithAllField = {
        name: "Jin",
        age: 30,
        email: "Jin@gmail.com",
    };
    console.log(userWithAllField);
};
exports.CASE02_typescriptTypeinfer = CASE02_typescriptTypeinfer;