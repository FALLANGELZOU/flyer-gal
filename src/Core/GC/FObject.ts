export class FObject {
    private name: String
    private parent: FObject
    private children: Array<FObject>
    private isRoot: boolean

    constructor(name: String, isRoot: boolean = true) {
        this.name = name
        this.isRoot = isRoot
    }

    /**
     * 向上发送事件
     * @param event 事件
     */
    targer(event: any) {
        if (!this.isRoot)
            this.parent.receiver(event)
    }

    /**
     * 接收孩子事件
     * @param event 事件
     */
    receiver(event: any) {
        if (this.interceptor(event, Sender.Father) == false) return
        this.targer(event)
    }

    /**
     * 事件拦截器
     * @param event 事件
     * @param type 发送者
     * @returns 是否继续发送
     */
    interceptor(event: any, type: Sender) {
        return true
    }
    /**
     * 向下发送事件
     * @param event 事件
     */
    distributer(event: any) {
        if (this.children == undefined || this.children == null) return
        for(let child of this.children) {
            child.accepter(event)
        }
    }
    /**
     * 接收父亲事件
     * @param event 事件
     */
    accepter(event: any) {
        if (this.interceptor(event, Sender.Child) == false) return
        this.distributer(event)
    }

    addChild(child: FObject) {
        this.children.push(child)
        child.parent = this
    }

    removeChild(child: FObject) {
        this.children = this.children.filter(e => e.name != child.name)
    }

    setParent(parent: FObject) {
        this.parent = parent 
        this.isRoot = false
    }

}

export enum Sender {
    Father,
    Child
}