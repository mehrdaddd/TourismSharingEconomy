import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Ad from "./Ad";
import {Layout} from 'antd';
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import axios from "axios" ;
import * as routes from "./../constants/routes";


const {Content, Sider} = Layout;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

            companies: [],
        };
        this.rchange = this.rchange.bind(this);
    }

        // database interaction with star comment cmponent
        componentWillMount()
        {

            axios.get('/home')
                .then(response => {
                        this.setState({
                            companies: response.data
                        });

                    }
                );

        }

        // enter for rate
        rchange = (opp, add, value) => {

            axios.post('/home/rate/' + opp.head + '/' + add._id, {
                star: value
            })
            alert("Your Rating is saved ");
            this.forceUpdate();
        }


        render()
        {


            return (
                < Router >
                < div
            className = "App" >

                < div
            className = "container" >


                < h1
            className = "page" >
                The
            Best
            Tourism
            Companies
            < /h1>
            < /div>

            < Layout >

            < MediaQuery
            minWidth = {800} >
                < Sider
            className = "sider"
            width = {300} >
                < Ad / >
                < Ad / >
                < Ad / >
                < /Sider>
                < /MediaQuery>


                < Content
            className = "contentt" >


                < Panel
            className = "table" >


                {this.state.companies.map((panels) => {

                    return (
                        < div
                    key = {panels._id
                }>


                <
                    Panel.Heading > < h1 > {panels.head
                } <
                    /h1></
                    Panel.Heading >
                    < Panel.Body > {panels.body
                } <
                    /Panel.Body>

                    {
                        panels.company.map((panel) => {

                            return (
                                < div
                            key = {panel._id
                        }>
                        <
                            ListGroupItem > < a
                            className = "items"
                            href = {panel.link
                        }>
                            {
                                panel.name
                            }
                        <
                            /a>

                            < p > {panel.text
                        }<
                            /p>

                            < Star
                            value = {panel.orate}
                            onChange = {(v) => this.rchange(panels, panel, v)}/>


                            < Commentt
                            onPressEnterr = {panel._id
                        }
                            lm = {panel.commentGroup
                        }
                            addr = {panels.head
                        }
                            panel = {"home"}
                            />


                            < /ListGroupItem>

                            <a href={routes.ADDMORE}> <ListGroupItem>Add More &hellip;</ListGroupItem>  </a>
                            < /div>
                        )
                        })
                    }

                <
                    /div>
                )
                })
        }


        <
            /Panel>


            < /Content>

            < /Layout>

            < /div>

            < /Router>

        )
            ;
        }


}
    export default Home;
