import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {Link} from 'react-router-dom';

const AccountButton=() =>
    <button className= "buttonn"
            type="button"
    >
        <Link to={routes.ACCOUNT}> Dashboard </Link>
    </button>

export default AccountButton;

