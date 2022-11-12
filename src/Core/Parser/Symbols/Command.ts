import { logger } from "@/log/logger"


enum TokenType {
    STRING,
    NUMBER,
    MACRO
}
interface IToken {
    type: TokenType,
    value: any
}

export class Command {
    private prefix = "#"
    public name: string = "undefined"
    public params = new Map<string, IToken>()
    public contents = new Array<IToken>()

    constructor() {
    }

    public static load(script: string) {
        if (script[0] != "#") {
            logger.error("[" + script + "]不是脚本指令!")
            return null
        }
        let tokens = script.trim().split(/\s+/).map(e => e.trim())
        let name = tokens[0].replace("#","")
        let command = new Command()
        for (let index= 0; index < tokens.length; index ++) {
            let item = tokens[index]
            if (item[0] === "#") {
                command.name = item.replace("#","")
            } else if (item[0] === "-") {
                command.params.set(item.replace("-",""), inputEval(tokens[index+1]))
                index++
            } else {
                command.contents.push(inputEval(item))
            }
        }
        return command
    }
    
}

function inputEval(text: string) {
    if (text[0] === "\"" && text[text.length-1] === "\"") {
        // 字符串
        let res: IToken = {
            type: TokenType.STRING,
            value: text.substring(1, text.length-1)
        }
        return res
    } else if (isNumber(text)) {
        let res: IToken = {
            type: TokenType.NUMBER,
            value: Number(text)
        }
        return res
    } else {
        let res: IToken = {
            type: TokenType.MACRO,
            value: text
        }
        return res
    }
}

function isNumber(input: string) { 
    let re = /^-?[0-9]+.?[0-9]*$/;
    if (!re.test(input)) return false
    return true
}