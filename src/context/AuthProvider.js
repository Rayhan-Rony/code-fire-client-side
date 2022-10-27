import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('Rahim')


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {

        return signOut(auth)
    }

    const authInfo = { signIn, logOut, createUser, user, signinWithProvider, updateUserProfile, verifyEmail };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider