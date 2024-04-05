import PropTypes from "prop-types";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoding(false)
    })

    return () => {
        unSubScribe;
    }
  }, [])

  const AuthInfo = {
    user,
    setUser,
    loding,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
