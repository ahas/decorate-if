type Decorator<T> = T;

export const DecorateIf = <T>(
    condition: boolean | (() => boolean),
    trueDecorator: () => Decorator<T>,
    falseDecorator?: () => Decorator<T>,
): T => {
    let isTrue = false;
    if (typeof condition === "function") {
        isTrue = condition();
    } else {
        isTrue = condition;
    }

    if (isTrue) {
        return trueDecorator?.()!;
    }
    return falseDecorator?.()!;
};
