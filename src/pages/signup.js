import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('SignUp Success'));
    }

    const signupWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(value => alert('Success'))
    }

    return (
        <div className="signup-page">
            <h1>SignUp Page</h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Your email"/>
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder="Enter Password email"/>
            
            <br />
            <button onClick={signupWithGoogle}>Signin With Google</button>
            <button onClick={createUser}>Sign Up</button>
        </div>
    )
}

export default SignupUser;