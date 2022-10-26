import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';


export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);


    const providerLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const githubLogin =()=>{
        return signInWithPopup(auth, gitHubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {providerLogin,createUser,signIn,updateUserProfile,logOut,githubLogin,user,loading};

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;