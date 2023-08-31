'use client'
import { useState,useEffect } from 'react';
import ChatHeader from '../components/chatHeader/page';
import ChatRow from '../components/chatRow/page';
import ChatWindow from '../components/chatWindow/page';
import axios from 'axios';

export default function Chat(functions:any) {
    const [clickedChatId,setChatId] = useState(-1);
    const [messages,changeMessages] = useState([{}]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        // Create an interval that calls the function every second
        const intervalId = setInterval(() => {
          // Perform the action you want to execute every second
          if(clickedChatId!=-1){
            getMessages();
          }
          setCount(count => count + 1);
        }, 1000); // 1000 milliseconds = 1 second
    
        // Clear the interval when the component is unmounted or when the dependency array changes
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    const getMessages = async () => {
        const data = {
            accessToken:functions.tokenGetter()
        }
        try{
            const res = await axios.post('/api/get-message/',data);
            changeMessages(res.data.messages);
        }catch(error){
            window.alert(error)
        }
    }

    const sendMessage=async(text:string)=>{
        const data={
            accesstoken:functions.tokenGetter(),
            message:text
        };
        try{
            const res = await axios.post('/api/sent-message/',data);
            getMessages();
        }catch(error){
            window.alert('message was not sent');
        }
    }

    return (
        <div className="chat-container" > 
            <ChatHeader/>
            <div className='chat-body'>
                <div className='chat-body-halfpage' >
                    <ChatRow chatSetter={setChatId} 
                             messageLoader={getMessages}
                             chatId={1} 
                    />
                </div>

                <div className='chat-body-halfpage' >
                {
                    clickedChatId ==-1 ?
                        <h1>Some kind of image</h1>:
                        <ChatWindow 
                        chatMessages={messages}
                        sendMessage={sendMessage}
                        />                            
                }
                </div>
            </div>
        </div>
    );
}