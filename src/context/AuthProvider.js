import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinWithProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {

        return sendEmailVerification(auth.currentUser)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.email) {
                setUser(currentUser)
            }

            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { setLoading, user, signIn, createUser, signinWithProvider, updateUserProfile, verifyEmail, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider