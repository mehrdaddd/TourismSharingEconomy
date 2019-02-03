import React, {Component} from 'react';
import { FormControl, input,textarea, select,Checkbox, Radio,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import {app } from '../firebase/firebase';
import WithAuthorization from './withAuthorizationnnn';
import {Link} from 'react-router-dom' ;
import  AuthUserContext from './AuthUserContext';
import axios from "axios" ;

const INITIAL_STATE= {
    select:'',
    travelogue:'',
    ro:"timeline",
    more:'',
    NatureWildlifeTourism: false,
    SportsTourism: false,
    ReligionTourism: false,
    Educational: false,
    Medical: false,
    Food: false,
    Trade: false,
    Tours: false,
    user: ''
};

// to change the variables

const byPropKey = (propertyName, value, user= "UserName") => () => ({
    [propertyName]: value,
    user: user
});


// to change the variables for text
const byPropKeyy = (propertyName, value) => () => ({[propertyName]: !value,});

class WriteTravelogue extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }


    // save data in database
    onSubmit = (event) =>       {

        axios.post('/travellogue',{

            more: this.state.more,
            travelogue: this.state.travelogue,
            ro: "timeline",
            user: this.state.user,
            select: {
                    SportsTourism: this.state.SportsTourism,
                    ReligionTourism: this.state.ReligionTourism,
                    Educational: this.state.Educational,
                    Medical: this.state.Medical,
                    NatureWildlifeTourism: this.state.NatureWildlifeTourism,
                    Trade: this.state.Trade,
                    Tours: this.state.Tours,
                    Food: this.state.Food,
            },

        });

        this.setState(() => ({...INITIAL_STATE}));
        alert( "Your new company will be evaluate and send you back the feedback " );
        event.preventDefault();
    }


    render() {

        return (

            <AuthUserContext.Consumer>

                {authUser =>

                    <form className="addmore" onSubmit={this.onSubmit}>

                        <FormGroup>
                            <ControlLabel><h1>
                                Write a Travelogue </h1></ControlLabel>
                        </FormGroup>


                        <FormGroup>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('SportsTourism', this.state.SportsTourism))}
                                inline>SportsTourism</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('ReligionTourism', this.state.ReligionTourism))}
                                      inline>ReligionTourism</Checkbox>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('NatureWildlifeTourism', this.state.NatureWildlifeTourism))}
                                inline>Nature and Wildlife</Checkbox>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('Medical', this.state.Medical))}
                                inline>Medical</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('Food', this.state.Food))}
                                      inline>Food</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('Educational', this.state.Educational ))}
                                      inline>Trade</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('Trade', this.state.Trade))}
                                      inline>Trade</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('Tours', this.state.Tours))}
                                      inline>Tour</Checkbox>

                        </FormGroup>


                        <span>
                    <ControlLabel>User Name </ControlLabel>
                    <FormControl componentClass="textarea" placeholder= {authUser.email}  value={authUser.email}
                                 disabeled  />
                </span>

                        <span>
                    <ControlLabel>Travelogue</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Travelogue" value={this.state.travelogue}
                                 onChange={event => this.setState(byPropKey('travelogue', event.target.value, authUser.email))}/>
                </span>


                        <span>
                    <ControlLabel> More</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="More" value={this.state.more}
                                 onChange={event => this.setState(byPropKey('more', event.target.value, authUser.email))}/>
                </span>

                        <Button type="submit" className="submit">Submit</Button>
                    </form>
                }

            </ AuthUserContext.Consumer >
        );
    }
}

const TravelogueForm = () =>
    <form className="loginStyles">
        <Link to='/writetravelogue'> <h1>  Write a Travelogue  </h1> </Link>
        <br/>
        <h3>Accessible for all users</h3>
    </form>




const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(WriteTravelogue);

export {TravelogueForm} ;

