'use client'
import { useState } from "react";

interface ChatWindowProps {
    chatMessages: any[];
    sendMessage: (message: string) => void;
}
export default function ChatWindow( {chatMessages , sendMessage} : ChatWindowProps ){
    
    const [text,setText] = useState('');
    
    return (
                <div className="chat-window" >
                    {   
                        <div className="messages-container">
                                {
                                chatMessages.map(
                                    (message : any) => (
                                        <div key={message._id} className="message">
                                            <h6>{message.name}</h6>
                                            <h1>{message.message}</h1></div>
                                    )
                                )
                                }
                        </div>
                    }
                    <div className="message-sending">
                        
                        <input className="message-input"
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                        />
                        
                        <button className='message-button' 
                                onClick={()=>{sendMessage(text);setText('');}} 
                        >Send message</button>

                    </div>
                </div>
    );
}