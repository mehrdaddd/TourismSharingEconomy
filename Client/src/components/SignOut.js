import React from 'react';
import {auth} from '../firebase/index';
import './App.css';
import Button from './Button';
const SignOutButton=() =>
    <Button

    type="button"
    onClick={auth.doSignOut}
    >
        Sign Out


    </Button>

export default SignOutButton;