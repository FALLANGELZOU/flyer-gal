import { Picture } from "../Resource/Picture";
import { FObject, Sender } from "./FObject";
import { Section } from "./Section";
export class Stage extends FObject {
    private background: Picture | null = null
    private leftDrawing: Picture | null = null
    private rightDrawing: Picture | null = null
    private midDrawing: Picture | null = null
    private mSection: Section | null = null

    override interceptor(event: any, type: Sender): boolean {
        
        return false
    }

    


}