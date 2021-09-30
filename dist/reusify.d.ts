export interface IReusify<T extends IInputClass> {
    (Constructor: new () => T): {
        get(): IInputClass;
        release(obj: IInputClass): void;
    };
}
export interface IConstructor {
    new (): IInputClass;
}
export interface IInputClass {
    next: IInputClass | null;
    [props: string]: any;
}
declare const reusify: IReusify<any>;
export default reusify;
