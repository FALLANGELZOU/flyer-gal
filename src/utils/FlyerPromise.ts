export class FlyerPromise {
    abort: (reason?: any) => void
    promise: Promise<any>

    cancel() {
        this.abort("cancel the promise")
    }

    constructor(promise: Promise<any>) {
        let p1 = new Promise((resolve: (value: unknown) => void, reject: (reason?: any) => void) => { 
            this.abort = reject 
        })
        this.promise = Promise.race([promise, p1]);
    }
}


