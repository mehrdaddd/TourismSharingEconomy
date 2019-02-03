import React, {Component} from 'react';
import axios from "axios" ;
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {Link} from 'react-router-dom' ;

// component
class Travelouge  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            panel1: [],
        };
        this.rchange = this.rchange.bind(this);
    }

    // database interaction with star comment cmponent
    componentWillMount() {

        // retrive posts from database
        axios.get('/travellogue')
            .then(response => {
                    this.setState({
                        panel1: response.data
                    });
                }
            );
    }

    // enter for Rate
    rchange = (id, value) => {
        axios.post('/travellogue/rate/'+ id, {
            star :  value
        }
    )
        alert( "Your Rating is saved " + id);
        this.forceUpdate();
    };

    render() {
        return (
            <div className="table">


                <Panel.Heading><h1> Travelogue </h1></Panel.Heading>

                {this.state.panel1.map((panel) =>{

                    return(
                        <div  className="paddin" key={panel._id}>
                            <ListGroupItem>

                                <h2 className="userr">
                                    <Link to={"/show-profile/" + panel.user}> {panel.user} </Link>
                                </h2>

                                <h2> Travelogue </h2>
                                <p>{panel.travelogue}</p>
                                <h2>More </h2>
                                <p>{panel.more}</p>

                                <Star value={panel.orate}  onChange={(v) => this.rchange(panel._id ,v)} />


                                <Commentt onPressEnterr={panel._id} lm={panel.commentGroup}  panel={"travellogue"} />


                            </ListGroupItem>


                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Travelouge ;