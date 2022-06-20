"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorateIf = void 0;
const DecorateIf = (condition, trueDecorator, falseDecorator) => {
    let isTrue = false;
    if (typeof condition === "function") {
        isTrue = condition();
    }
    else {
        isTrue = condition;
    }
    if (isTrue) {
        return trueDecorator === null || trueDecorator === void 0 ? void 0 : trueDecorator();
    }
    return falseDecorator === null || falseDecorator === void 0 ? void 0 : falseDecorator();
};
exports.DecorateIf = DecorateIf;
