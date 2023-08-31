'use client'
import { useState } from 'react'
import axios from 'axios';
 
export default function SignUp(functions:any) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); 

    const hasAnAccount = ()=>{
      functions.pageDefiner(1)
    };

    const handleRegister = async () => {
      // Perform registration logic here
      const data =  {
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
        rememberMe:rememberMe
      };
      
      try {
        const response = await axios.post('/api/auth/signup/', data);
        functions.tokenSetter( response.data.token.accessToken );
        functions.pageDefiner(2);
      }catch (error){
        window.alert(error);
      }
    };
  
    return (
      <div className='registration-container'>
        <h2>Registration</h2>
        
        <div className='module-container'>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        <div className='module-container'>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <div className='module-container'>
          <label>Email</label>
          <input
            type="email"
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
                onClick={handleRegister} 
              >Register</button>
        
        <h6>Already have an account ? click <a 
          style={{"color":"blue"}}
          onClick={ 
            ()=>{functions.pageDefiner(1)} 
          }
          >here</a>!</h6>
          
      </div>
    );
}

