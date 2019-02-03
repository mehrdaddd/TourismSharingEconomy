import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {Link} from 'react-router-dom';

const SignInButton=() =>
    <button className= "buttonn"
            type="button">
        <Link to={routes.SIGN_IN}> Sign In</Link>
    </button>

export default SignInButton;

