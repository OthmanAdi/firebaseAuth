import './App.css';
import {auth} from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react';


function App() {
  const [user, setUser] = useState(null);

  const [lastLogin, setlastLogin] = useState(null);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user){
        setlastLogin(new Date().toLocaleString());
      }else{
        setlastLogin(null);
      }
    });
    return () => unsubscribe();
  },[]);

  const signinWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(error => console.log(error));
  };

  const handleSignOut = () =>{
    signOut(auth).catch(error => console.log(error));
  };
  
  return (
    <div className="App">
      <h1>Firebase Auth Config and View</h1>
      {user? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt='profile photo' width='100'/>

          <p>last log in: {lastLogin}</p>
          
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ):(
        <button onClick={signinWithGoogle}>Sign in with your google account!</button>
      )}
    </div>
  );
}

export default App;
