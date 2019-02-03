import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import l from '../logo.png';
import * as routes from "../constants/routes";
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return(
                <header className="App-header">
                    <div >
                        <Link to={routes.TIMELINE}><img className="App-logo" src={l} alt="The Pulpit Rock" width="200" height="80" />  </Link>

                        <Navigation  />
                    </div >
                    <p className="whitt">The more Travel the more ...</p>

                </header>
        );
    }
}
export default Header;