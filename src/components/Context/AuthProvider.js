import React, { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useEffect } from "react";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
/* Google login */
  const providerLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
/*  createUser login */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /*  user signIn */
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* profile update */
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
/* logOut page */
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
/* Git hub login  */
  const githubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  /*  State change  */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
        setUser(currentUser);
     
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    providerLogin,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    githubLogin,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
