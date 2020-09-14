import React from 'react';
import './Header.css';
import logo from '../Img/logo.png';
import { Link, Router } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useAuth } from '../Login/useAuth';
import Login from '../Login/Login';

const Header = () => {
    const auth = useAuth();
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <nav className="navbar navbar-expand-lg w-75 navbar-fixed-top ">
                    <div className="container-fluid d-flex justify-content-center">
                        <a className="navbar-brand" href='/Home'><h1 className='brandLogo'>Lumière</h1></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav ">


                                <a className="nav-link links" href='/Home'>Home</a>
                                <a className="nav-link links" href='/Showcase'>Showcase</a>
                                {
                                    auth.user ?
                                    <span>
                                        <a className="nav-link links" href='/User'>Admin</a>
                                        
                                    </span>
                                    : <a className="nav-link links" href='/User'>Login</a>
                                }
                                {   auth.user ?
                                    <a onClick={auth.signOut} className="nav-link links my-button-2" href='/'>Sign Out</a>
                                    :
                                    <span></span>
                                }


                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;