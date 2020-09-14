import React, { useState } from 'react';
import '../Authentication/Authentication.css';
import '../Authentication/Authentication.scss';
import Auth from './useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaGoogle } from "react-icons/fa";
import { useEffect } from 'react';
const Login = () => {
    const auth = Auth();

    //states
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount]=useState(false);






    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

    }
    const handlePassword = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
    }
    const handleSignIn = (event) => {
        
        


        event.preventDefault();
        auth.signInWithPassword(email, password);
        console.log(auth.signInWithPassword(email, password));
        if(auth.user){
            clearInput();
        }
        else{
            //do something
        }

    }
    const handleSignUp = (event) => {
        clearError();
        clearInput();
        event.preventDefault();
        auth.signUpWithPassword(email, password);
        console.log(auth.signUpWithPassword(email, password));
    }
    const clearInput=()=>{
        setEmail("");
        setPassword("");
    }
    const clearError=()=>{
        setEmailError("");
        setPasswordError("");
    }





    useEffect(()=>{



    }
    ,[])













    return (
        <div>

            {
                auth.user
                    ?

                    <div>
                        <p>Wlecome {auth.user.email}</p>
                        <button onClick={auth.signOut}>Sign Out</button>
                    </div>
                    :
                    <div className='container cover'>
                        <div className="card cover-card border-0 row justify-content-around">
                            <div className='login-panel w-50'>

                            </div>
                            <div className='left-panel d-flex align-items-center w-50'>
                                <div className="container">
                                    <form onSubmit={handleSignIn} >

                                        <h1 className="title">Login</h1>

                                        <div className="form__group field">
                                            <input type="input" className="form__field" placeholder="Name" name="name" onBlur={handleEmail} id='username' required />
                                            <label className="form__label">Username</label>
                                        </div>
                                        <div className="form__group field">
                                            <input type="password" className="form__field" placeholder="Password" name="password" onBlur={handlePassword} id='password' required />
                                            <label className="form__label">Password</label>
                                        </div>

                                        <div className="form-group d-flex justify-content-between margin-top ">
                                            <button type="submit" className="my-button">Sign In</button>
                                        </div>

                                        <div className="form-group d-flex justify-content-between margin-top ">
                                            <p>Do you have an account?<a href="" className="">Sign In</a></p>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

            }
        </div>
    );
};

export default Login;