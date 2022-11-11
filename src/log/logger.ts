import { Chalk } from "chalk"

const chalk = new Chalk({})

export const logger = {
    info(msg: any) {
        console.log(chalk.green("[INFO]", msg));
    },

    error(msg: any) {
        console.log(chalk.red("[ERROR]"), msg);
        
    }
}

