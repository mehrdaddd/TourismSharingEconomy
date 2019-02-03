import React, {Component} from 'react';
import { FormControl, input,textarea, select,Checkbox, Radio,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import axios from "axios" ;
import WithAuthorization from './withAuthorizationnnn';
import {Link} from 'react-router-dom' ;
import  AuthUserContext from './AuthUserContext';


const INITIAL_STATE= {
    select:'',
    valueWebExplanation: '',
    valueweb:'',
    valueCompany:'',
    ro:"timeline",
    need:'',
    more:'',
    flight: false,
    multifunctional: false,
    accommodation: false,
    information: false,
    restaurants: false,
    social: false,
    taxi: false,
    train: false,
    tools: false,
    tours: false,
    user: ''

};

// to change the variables

const byPropKey = (propertyName, value, user= "UserName") => () => ({
    [propertyName]: value,
    user: user
});


// to change the variables for text
const byPropKeyy = (propertyName, value) => () => ({[propertyName]: !value,});

class Post extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }


    // save data in database
    onSubmit = (event) =>       {

        axios.post('/writePost' , {
            select: {
                Multifunctional: this.state.multifunctional,
                Accommodation: this.state.accommodation,
                Information: this.state.information,
                Restaurants: this.state.restaurants,
                Flight: this.state.flight,
                Train: this.state.train,
                Tools: this.state.tools,
                Tours: this.state.tours,
                Taxi: this.state.taxi,
                Social: this.state.social,
            },
            link: 'https://'+ this.state.valueweb,
            name: this.state.valueCompany,
            text: this.state.valueWebExplanation,
            need:this.state.need,
            more: this.state.more,
            ro: "timeline",
            user: this.state.user,
            approve: 0
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
                            <ControlLabel><h1>Add Post </h1></ControlLabel>
                        </FormGroup>


                        <FormGroup>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('multifunctional', this.state.multifunctional))}
                                inline>Multifunctional</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('flights', this.state.flights))}
                                      inline>Flights</Checkbox>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('information', this.state.information))}
                                inline>Information</Checkbox>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('restaurants', this.state.restaurants))}
                                inline>Restaurants</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('social', this.state.social))} inline>Social
                                medias</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('taxi', this.state.taxi))}
                                      inline>Taxi</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('tools', this.state.tools))}
                                      inline>Tools</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('tours', this.state.tours))}
                                      inline>Tours</Checkbox>
                            <Checkbox
                                onChange={event => this.setState(byPropKeyy('accommodation', this.state.accommodation))}
                                inline>Accommodation</Checkbox>
                            <Checkbox onChange={event => this.setState(byPropKeyy('train', this.state.train))}
                                      inline>Train</Checkbox>

                        </FormGroup>

                        <span>
                    <ControlLabel>User Name </ControlLabel>
                    <FormControl componentClass="textarea" placeholder= {authUser.email}  value={authUser.email}
                                 disabeled  />
                </span>

                        <span>
                    <ControlLabel>Name of Company</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Name of Company" value={this.state.valueCompany}
                                 onChange={event => this.setState(byPropKey('valueCompany', event.target.value, authUser.email))}/>
                </span>

                        <span>
                    <ControlLabel> Web Address</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Web Address" value={this.state.valueweb}
                                 onChange={event => this.setState(byPropKey('valueweb', event.target.value , authUser.email))}/>
                </span>

                        <span>
                    <ControlLabel> Explanation</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Explanation"
                                 value={this.state.valueWebExplanation}
                                 onChange={event => this.setState(byPropKey('valueWebExplanation', event.target.value, authUser.email))}/>
                </span>

                        <span>
                    <ControlLabel> Need</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Need" value={this.state.need}
                                 onChange={event => this.setState(byPropKey('need', event.target.value, authUser.email))}/>
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

const PostForm = () =>
    <form className="loginStyles">
        <Link to='/post'> <h1>  New Post  </h1> </Link>
        <br/>
        <h3>Accessible for all users</h3>
    </form>




const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(Post);

export {PostForm} ;