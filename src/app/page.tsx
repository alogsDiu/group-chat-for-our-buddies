'use client'
import { useState } from 'react'
import Login from './login/page';
import SignUp from './signup/page';
import Chat from './chat/page';

export default function Home() {  
  const [page,setPage] = useState(0);
  const [token,setToken] = useState("dump");
  
  const getToken =(): string=>{
    return token;
  } 

  return (
    <div>
      { 
        page==0?<SignUp pageDefiner={setPage} tokenSetter={setToken} />:
        
        page==1?<Login pageDefiner={setPage} tokenSetter={setToken} />:
        
        <Chat tokenGetter={getToken}/>
      }
    </div>
  );
}

