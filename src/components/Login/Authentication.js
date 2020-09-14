import React, { useState } from 'react';
import '../Authentication/Authentication.css';
import '../Authentication/Authentication.scss';
import Auth from './useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaGoogle } from "react-icons/fa";
const Authetication = () => {
    const auth = Auth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

    }
    const handlePassword = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
    }
    const signInUser = (event) => {
        event.preventDefault();
        auth.signInWithPassword(email, password);
        console.log(auth.signInWithPassword(email, password));
    }
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
                                    <form onSubmit={signInUser} >

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
                                            <button type="submit" className="my-button">Login</button>
                                        </div>
                                        <div className="form-group d-flex justify-content-between margin-top ">
                                            <p>Do you have an account?</p>    <a type="submit" className="">Login</a>
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

export default Authetication;