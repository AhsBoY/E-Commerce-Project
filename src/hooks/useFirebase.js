import { useState } from "react/cjs/react.development"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})   /* user login hote pare abr nao hote pareh */
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)  /* using it like this for some special purpose */
        /* .then(result => {
            setUser(result.user)
        }) */
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase