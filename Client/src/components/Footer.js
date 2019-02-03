import React, { Component } from 'react';
import './App.css';
import * as routes from "../constants/routes";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {


        return(
<div className= "footer">
    <p className= "App-footer">The more explore the more ....</p>
    <Link to={routes.CONTACTUS}> Contact Us  </Link>

</div>


        );
    }
}
export default Footer;