import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    // updateEmail,
    updateProfile,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import axios from "axios";

const providerGoogle = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log('currentUser: ', auth.currentUser);
    const currentUserFromAuth = auth.currentUser;
    if (currentUserFromAuth !== null) {
        currentUserFromAuth.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profileObj) => {
        return updateProfile(currentUserFromAuth, profileObj);
    }

    // const updateUserEmail = (email) => {
    //     return updateEmail(currentUserFromAuth, email);
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            // const userEmail = currentUser?.email || user?.email;
            // const loggedInUser = { email: userEmail }

            // values of the current user
            console.log('value of current user: ' + currentUser);
            setUser(currentUser);
            setLoading(false);

            // if user exists then issue a token
            // if (currentUser) {
            //     axios.post('https://b8a11-server-print-hub-finder.vercel.app/jwt', loggedInUser, { withCredentials: true })
            //         .then(res => {
            //             console.log('token response: ' + res.data);
            //         })
            // } else {
            //     axios.post('https://b8a11-server-print-hub-finder.vercel.app/logout', loggedInUser, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            // }


            // const user = { email };
            // axios.post('https://b8a11-server-print-hub-finder.vercel.app/jwt', user, { withCredentials: true })
            //     .then(res => {
            //         console.log(res.data);
            //         console.log(res.data.success);
            //     })

            let payload = { email: user?.email }
            axios.post('https://b8a11-server-print-hub-finder.vercel.app/jwt', payload, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    console.log(res.data.success);
                });
            // if (user?.email) {
            //     axios.post('https://b8a11-server-print-hub-finder.vercel.app/jwt', payload, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //             console.log(res.data.success);
            //         });
            // }

        });
        return () => {
            return unSubscribe();
        }
    }, [/* user?.email */user]);

    const authInfo = { user, loading, setLoading, createUser, setUser, loginUser, loginWithGoogle, logOut, updateUserProfile, /* updateUserEmail */ };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;