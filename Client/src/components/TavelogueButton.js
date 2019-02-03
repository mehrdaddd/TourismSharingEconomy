import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {Link} from 'react-router-dom';

const TravelogueButton=() =>
    <button className= "buttonn"
            type="button">
        <Link to={routes.TRAVELOGUE}> Travelogue</Link>
    </button>

export default TravelogueButton;

