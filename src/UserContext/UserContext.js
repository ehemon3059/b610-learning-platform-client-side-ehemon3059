import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app);



const UserContext = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user , setUser] = useState(null);

        const createUser = (email,password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
        }

        const signInUser = (email,password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

        const googleProviderLogin = (provider) => {
            setLoading(true)
            return signInWithPopup(auth,provider)
        }

        const githubProviderLogin = (githubProvider) => {
            setLoading(true)
            return signInWithPopup(auth,githubProvider)
        }

        const logOut =() => {
            setLoading(true)
            return signOut(auth)
        }

        const updateUsrProfile =(profile) =>{
            return updateProfile(auth.currentUser, profile)
        }

        useEffect(() => {
            const unSubscribe =  onAuthStateChanged(auth, currentUser => {
                  console.log('current user ',currentUser);
                  setUser(currentUser);
                  setLoading(false);
              });
      
              return () => unSubscribe();
          },[])

    const authInfo = {user,createUser , loading , signInUser, logOut , updateUsrProfile , googleProviderLogin , githubProviderLogin}
    return (
        < AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;