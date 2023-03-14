import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(value => alert('SignIn Success'))
        .catch(err => console.log(err));
    };

  return (
    <div>
        <h1>Signin Page</h1>
      <div className='signin-page'>
        <label>Enter Your Email</label>
        <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your Email'></input>
        <label>Enter Your Password</label>
        <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Enter Your Password'></input>
        <button onClick={signinUser}>Signin Me </button>
      </div>
    </div>
  )
}

export default Signin
