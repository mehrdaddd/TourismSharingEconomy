import React, {Component} from 'react';
import axios from "axios" ;
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from './../firebase/firebase';
import {Link} from 'react-router-dom' ;



// component
class Timeline  extends Component {

    constructor(props){
        super(props);
        this.mainroot= app.database().ref().child('app').child('timeline').child('post');
        this.root = app.database().ref().child('app').child('timeline').child('post').child('items');
            this.state = {
                panel1:[],
            };
    this.rchange= this.rchange.bind(this);
}

    // database interaction with star comment cmponent
    componentWillMount() {
        //retrive the posts in timeline page
        axios.get('/timeline')
            .then(response => {
                    this.setState({
                        panel1: response.data
                    });
                }
            );
    }

    // enter for Rate
    rchange = (id, value) => {
        axios.post('/timeline/rate/'+ id, {
                star :  value
            }
        )
        alert( "Your Rating is saved " );
        this.forceUpdate();
    };


    render() {

        return (
            <Panel className="table">


                <Panel.Heading><h1> Timeline </h1></Panel.Heading>
                <Panel.Body>  </Panel.Body>
                {this.state.panel1.map((panel) =>{

                    return(
                        <div  className="paddin" key={panel.id}>
                            <ListGroupItem>

                                <h2 className="userr">
                                    <Link to={"/show-profile/" + panel.user}> {panel.user} </Link>
                                </h2>
                                <a className="items" href={panel.link}> {panel.name} </a>
                                <h2> Explanation </h2>
                                <p>{panel.text}</p>
                                <h2> Need </h2>
                                <p>{panel.need}</p>
                                <h2>More </h2>
                                <p>{panel.more}</p>

                                <Star value={panel.orate}  onChange={(v) => this.rchange(panel._id,v)} />

                                <Commentt onPressEnterr={panel._id} lm={panel.commentGroup}  panel={"timeline"} />


                            </ListGroupItem>


                        </div>
                    )
                })}



            </Panel>
        );
    }
}

export default Timeline ;