import React, {Component} from 'react';
import { FormControl, input,textarea, select,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import axios from "axios" ;
import WithAuthorization from './withAuthorizationnnn';
import {Link} from 'react-router-dom' ;


const INITIAL_STATE= {
    select:'',
    valueFull:'',
    email: '',
    valueweb:'',
    valueCompany:'',
    valueWebExplanation:'',
    ro:" company"

};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

class AddMore extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    // save data in database
    onSubmit = (event) =>       {

        axios.post('/organization/' + this.state.select,{

            name: this.state.valueCompany,
            link: 'https://'+this.state.valueweb,
            text: this.state.valueWebExplanation,
            fullname: this.state.valueFull,
            email: this.state.email,

            organization:this.state.select,
            ro:"panels"

        });



        this.setState(() => ({...INITIAL_STATE}));
        alert( "Your new company will be evaluate and send you back the feedback " );
        event.preventDefault();
    }

    render() {


        return (

            <form className= "addmore" onSubmit={this.onSubmit}>

                <FormGroup>
                <ControlLabel> <h1>Add company </h1></ControlLabel>
                </FormGroup>

                <FormGroup >
                    <ControlLabel>Which Sector</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" value={this.state.select} onChange={ event => this.setState(byPropKey('select', event.target.value))}>
                        <option value="other">...</option>
                        <option value="Multifunctional">Multifunctional</option>
                        <option value="Flight">Flights</option>
                        <option value="Information">Information</option>
                        <option value="Restaurant">Restaurants</option>
                        <option value="Socialmedia">Social medias</option>
                        <option value="Taxi" >Taxi and rental car</option>
                        <option value="Tool">Tools</option>
                        <option value="Tour">Tours</option>
                        <option value="Accommodation">Accommodation</option>
                        <option value="Train">Train tickets</option>

                    </FormControl>
                </FormGroup>

                <span  >
                    <ControlLabel>Full Name</ControlLabel>

                    <FormControl componentClass="textarea" placeholder="Full Name" value={this.state.valueFull} onChange={ event => this.setState(byPropKey('valueFull', event.target.value))} />
                </span>
                <span  >
                    <ControlLabel> Email Address</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Email Address" value={this.state.email} onChange={ event => this.setState(byPropKey('email', event.target.value))} />
                </span>

                <span  >
                    <ControlLabel>Name of Company</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Name of Company" value={this.state.valueCompany} onChange={ event => this.setState(byPropKey('valueCompany', event.target.value))} />
                </span>

                <span  >
                    <ControlLabel> Web Address</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Web Address" value={this.state.valueweb} onChange={ event => this.setState(byPropKey('valueweb', event.target.value))} />
                </span>

                <span >
                    <ControlLabel> Explanation</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Explanation" value={this.state.valueWebExplanation} onChange={ event => this.setState(byPropKey('valueWebExplanation', event.target.value))} />
                </span>

                <Button type="submit" className="submit" >Submit</Button>
            </form>
        );
    }
    }


            const AddMoreForm = () =>
                <form className="loginStyles">
                    <Link to='/add-more'> <h1> To Add new company  </h1> </Link>
                    <br/>
                    <h3>Accessible for all users</h3>
                </form>




const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(AddMore);

export {AddMoreForm} ;

