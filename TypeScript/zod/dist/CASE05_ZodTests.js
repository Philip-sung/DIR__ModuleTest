"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CASE05_ZodTests = void 0;
const zod_1 = __importDefault(require("zod"));
const CASE05_ZodTests = () => {
    const dateString = zod_1.default
        .string()
        .datetime()
        .safeParse("2025-04-21T02:44:28.353Z");
    if (!dateString.success) {
        console.log(dateString.error.format());
        throw new Error("Failed!");
    }
    console.log(dateString.data);
};
exports.CASE05_ZodTests = CASE05_ZodTests;
