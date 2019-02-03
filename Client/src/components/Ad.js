import React, {Component} from 'react'
import AdSense from 'react-adsense';
import './App.css';
class Ad extends Component {
    render() {


        return (

            <AdSense.Google className= "ad"
                client='ca-pub-8353858571441383'
                slot='7806394673'
                style={{ display: 'block'}}
                layout='in-article'
                format='fluid'
            />


        );
    }
}

export default Ad;