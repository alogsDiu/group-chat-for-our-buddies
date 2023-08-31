'use client'
import { useState } from "react";
import axios from "axios";

export default function Login(functions:any) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const handleLogin = async () => {
        
        const data =  {
          email:email,
          password:password,
        };

        try {
          const response = await axios.post('/api/auth/login/', data);          
          functions.tokenSetter(response.data.token.accessToken);
          functions.pageDefiner(2);  
        } catch (error) {
          window.alert('You messed up bro '+error);                
        }
    }
    return (
        <div className='registration-container'>
            
            <h2>Login</h2>
            
            <div className='module-container'>
                <label>Email</label>
                
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className='module-container'>
                <label>Password</label>
                
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <button className='register-button' 
                    onClick={handleLogin}
                                >Register</button>

            <h6>Do not have an account ? click <a 
            style={ {"color":"blue"} }
            onClick={
                ()=>{
                    functions.pageDefiner(0)
                } 
            }>here</a>!</h6>

        </div>
    );
};