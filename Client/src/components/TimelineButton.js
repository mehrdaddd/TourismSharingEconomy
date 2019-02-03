import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {Link} from 'react-router-dom';

const TimelineButton=() =>
    <button className= "buttonn"
     type="button"
    >
        <Link to={routes.TIMELINE}> Timeline </Link>
    </button>

export default TimelineButton;

