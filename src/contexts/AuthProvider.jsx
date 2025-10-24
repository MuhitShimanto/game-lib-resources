import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Provider
  const googleProvider = new GoogleAuthProvider();
  // Sign-Up
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign-In
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Sign-Out
  const handleSignOut = () => {
    return signOut(auth);
  };
  // Update Profile
  const handleUpdateProfile = (name, imgUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    });
  };
  // Reset Password through Email
  const handleResetPasswordEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
  // Export Auth Info
  const AuthInfo = {
    user,
    setUser,
    emailSignUp,
    emailSignIn,
    googleSignIn,
    handleSignOut,
    handleUpdateProfile,
    handleResetPasswordEmail
  };
  // On Auth State Change - Listener
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (cacheUser) => {
      if (cacheUser) {
        // User is signed in, see docs for a list of available properties
        setUser(cacheUser);
      }
    });
    return () => {
        unSubscribe()
    }
  }, []);

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
