import React from 'react'
import Signin from '../pages/signin';
import SignupUser from '../pages/signup';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from '../firebase';
import User from './user';
import AdminHome from '../admin/adminHome';
import NavBar from './navbar';

const auth = getAuth(app);


function UserHome() {

    const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
      } else {
        // user is logged out
        console.log('You Are Logged Out')
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <div className="App">
        <NavBar />
        <SignupUser/>
        <Signin/>
        <div>
            <br />
            <br />
            <button onClick={<AdminHome />}>Admin Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome {user.email}</h1>
      <User/>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default UserHome
