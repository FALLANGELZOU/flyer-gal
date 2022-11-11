import { Picture } from "../Resource/Picture";
import { FObject, Sender } from "./FObject";
import { Section } from "./Section";
export class Stage extends FObject {
    private background: Picture
    private leftDrawing: Picture
    private rightDrawing: Picture
    private midDrawing: Picture
    private mSection: Section

    override interceptor(event: any, type: Sender): boolean {
        
        return false
    }

    


}