/* eslint-disable @typescript-eslint/no-unused-vars */
import "./sass/Dialog.sass"
import { useState } from "react";

function sleep (time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
interface textOption {
    name: String
    message: String
    speed: number
    block?: (e?: any) => void  // when show all text
}

var msgStatus = 0
var showAll = false

export function Dialog(propos: {option: textOption}) {
    const name = propos.option.name
    const message = propos.option.message
    const speed = propos.option.speed
    const [showText, setShowText] = useState("")
  
    const click = async ()=>{

        if (msgStatus == 0) {
            msgStatus = 1
            new Promise(async (resolve, reject) => {
                var index = 0
                console.log(index);
                
                while(index <= message.length) {
                    if (showAll) {
                        await setShowText(message as any)
                        break
                    }
                    await setShowText(showText + message.substring(0, index))
                    index ++
                    await sleep(speed)
                }
                resolve("finish")
            })
            .then(res => {
                showAll = true    
                propos.option.block?.apply(null)
            }).catch(e => {
                console.log(e);
                
            })
        } else {
            showAll = true
        }
        }

    return (
        <div id="dialog_layout" className="" onClick={click}> 
            <div id="dialog_text_layout">
                <div id="name">{name}</div>
                <hr className="divider"></hr>
                <div className="line">
                    <div id="message">
                        {showText}
                    </div>
                </div>
                
         
            </div>
         </div>
    )
}