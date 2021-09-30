export interface IReusify<T extends IInputClass> {
    (Constructor: new () => T): {get(): IInputClass; release(obj: IInputClass): void};
}

export interface IConstructor {
    new (): IInputClass;
}

export interface IInputClass {
    next: IInputClass | null;
    [props: string]: any;
}

const reusify: IReusify<any> = Constructor => {
    let head = new Constructor();
    let tail = head;

    function get(): IInputClass {
        let current = head;

        if (current.next) {
            head = current.next;
        } else {
            head = new Constructor();
            tail = head;
        }

        current.next = null;

        return current;
    }

    function release(obj: IInputClass) {
        tail.next = obj;
        tail = obj;
    }

    return {
        get: get,
        release: release,
    };
};

export default reusify;
