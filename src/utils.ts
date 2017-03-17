/**
 * Created by bahgat.mashaly on 10/6/16.
 */
export class PromiseCompleter<R> {
    promise: Promise<R>;
    resolve: (value?: R|PromiseLike<R>) => void;
    reject: (error?: any, stackTrace?: string) => void;

    constructor() {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
}






export class global{
    private static _MaxZIndex:number = 10;
    static get MaxZIndex():number {
        return this._MaxZIndex;
    }

    static  set MaxZIndex(value:number) {
        this._MaxZIndex = value;
    }


}

export class Size {
    height: number;
    width: number;

    constructor(height: number = 100, width: number = 100) {
        this.height = height;
        this.width = width;
    }
}

export class Position {

    constructor(public left_x:string = "50%", public top_y:string = "50%") {
    }
}


export class CustomPosition {

    constructor(public left?:number, public top?:number) {
    }
}

