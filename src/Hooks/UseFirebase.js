import { useEffect, useState } from "react";
import initAuth from "../Firebass/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {

                setUser({})
            })
            .catch((error) => {
                console.log(error);
            })
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed: ', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        googleSignUp,
        logout,
    }
}
export default useFirebase;