"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaterialType = {
    Paper: "Paper",
    Wood: "Wood",
};
const func = (fabrication) => {
    if (fabrication.material === "Wood") {
        fabrication.species; // 추론이 가능하다.
    }
};
