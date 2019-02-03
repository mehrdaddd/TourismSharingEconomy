import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {Link} from 'react-router-dom';

const HometButton=() =>
    <button className= "buttonn"
        type="button"
    >
        <Link to={routes.HOME}> Home </Link>
    </button>

export default HometButton;

