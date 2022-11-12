import { logger } from "@/log/logger"
import { Command } from "./Symbols/Command"

export const analyerScript = (text: string) => {
    const commands: Array<Command> = []
    text.trim().split("\n").map(e => {
        e = e.trim()
        if (e.length != 0) {
            const command = Command.load(e)
            if (command != null)
                commands.push(command)
        }
    })
    logger.debug("完成脚本解析！")
    return commands
}