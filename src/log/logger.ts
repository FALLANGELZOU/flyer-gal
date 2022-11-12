import { Chalk } from "chalk"
import { debug } from "console";

const chalk = new Chalk({})
export var Mode = "product"
export const logger = {
    info(msg: any) {
        console.log(chalk.green("[INFO]", msg));
    },

    error(msg: any) {
        console.log(chalk.red("[ERROR]"), msg);
        
    },

    debug(msg: any) {
        if (Mode === "debug") {
            console.log(chalk.yellow("[DEBUG]", msg));
        }
    },

    setDebug() {
        logger.info("debug模式开启")
        Mode = "debug"
    },

    setProduct() {
        Mode = "product"
    }


}

