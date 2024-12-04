"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplaCase = void 0;
const zod_1 = require("zod");
const simplaCase = () => {
    console.log(`[ ** Use Case 01 ** ]`);
    const UserSchema = zod_1.z.object({
        name: zod_1.z.string(),
        age: zod_1.z.number(),
        email: zod_1.z.string().email(),
    });
    const userData = {
        name: "홍길동",
        age: 25,
        email: "hong@example.com",
    };
    const parseResult = UserSchema.safeParse(userData);
    console.log(parseResult);
};
exports.simplaCase = simplaCase;
