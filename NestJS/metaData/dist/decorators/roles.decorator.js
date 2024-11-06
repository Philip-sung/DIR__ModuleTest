"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalText = void 0;
const common_1 = require("@nestjs/common");
const AdditionalText = (...additionalText) => (0, common_1.SetMetadata)('additionalText', additionalText);
exports.AdditionalText = AdditionalText;
//# sourceMappingURL=roles.decorator.js.map