declare type Decorator<T> = T;
export declare const DecorateIf: <T>(condition: boolean | (() => boolean), trueDecorator: () => T, falseDecorator?: () => T) => T;
export {};
