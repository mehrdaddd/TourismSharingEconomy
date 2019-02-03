import React from 'react';
import {auth} from '../firebase/index';
import './App.css';

const Button= ({onClick, children}) =>
 <div className= "buttonn">
    <button
    type="button"
    onClick={onClick}
    >
        {children}

    </button>
</div>
export default Button;