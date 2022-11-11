export class ResourceManager {
    private mManager: ResourceManager
    private constructor() {

    }
    INSTANCE() {
        if (this.mManager == null || this.mManager == undefined) {
            this.mManager = new ResourceManager()
        }
        return this.mManager
    }

    
}