// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import React from 'react';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}














const getUser = user => {
    const { displayName, email, photoURL, password } = user;
    return {
        name: displayName,
        email: email,
        photo: photoURL,
        password: password
    }
}

const Auth = () => {
    const [user, setUser] = useState(null);


    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(res => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = res.credential.accessToken;
            // The signed-in user info.
            //const user = res.user;

            const signedInUser = getUser(res.user)
            setUser(signedInUser);
            return res.user;
            // ...
        }).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;

            setUser(null);
            return errorMessage;
            // ...
        });
    }

    
    const signInWithPassword = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {

                const signedInUser = getUser(res.user)
                setUser(signedInUser);

                console.log('Eikhane Paise!');
                return res.user;
                // ...
            })

            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                return errorMessage;
            });
    }

    const signUpWithPassword = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
               const msg= "Account Created Successfully!!!";
               return(msg);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {

            setUser(null);
        }).catch(function (error) {
            // An error happened.
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currUser = getUser(usr);
                setUser(currUser);
            } else {

            }
        });
    }, [])


    return {
        user,
        signOut,
        signInWithPassword,
        signInWithGoogle,
        signUpWithPassword
    }
}
export default Auth;