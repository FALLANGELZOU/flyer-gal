/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./sass/Dialog.sass"
import { useState } from "react";
import TypeIt from "typeit-react";

export function Dialog(propos) {
    const [name, setname] = useState(propos.name)
    const [message, setMessage] = useState(propos.message)
    const [typeitInstance, setTypeitInstance] = useState(null)
    const [showText, setShowText] = useState("")
    var index = 0
    const show = ()=>{
        while(showText.length < message.length) {
            setShowText(showText + message[index])
            index ++
        }
    }
    const click = ()=>{
        console.log(111);
        
            
        }

    return (
        <div id="dialog_layout" className="" onClick={click}> 
            <div id="dialog_text_layout">
                <div id="name">{name}</div>
                <hr ></hr>
                <div className="line">
                    <div id="message">
                        {showText}
                    </div>
                </div>
                
         
            </div>
         </div>
    )
}