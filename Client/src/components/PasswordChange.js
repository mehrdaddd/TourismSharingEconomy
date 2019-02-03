import React, {Component} from 'react';
import  {auth} from '../firebase';
import './App.css';

const byPropKey = ( propertyName , value) => () => ({
    [propertyName]: value,
});



const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo:'',
    error: null
};

class PasswordChangeForm extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {passwordOne}= this.state;
        auth.doPasswordUpdate(passwordOne)
            .then(()=> {
                this.setState(() => ({ ...INITIAL_STATE}));
            })
            .cath(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error
        }=this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <div >
                <form  onSubmit={this.onSubmit} className="loginStyles" >

                <h1> Change Password </h1>

                <input
                    style={{width: "100%"}}
                    value={passwordOne}
                    onChange={ event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type = "password"
                    placeholder="New Password" />

                &nbsp; &nbsp;

                <input
                    style={{width: "100%"}}
                    value={passwordTwo}
                    onChange={ event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password" />

                &nbsp; &nbsp;

                <button disabled={isInvalid} type="submit" style={{width: "100%"}}  >
                  Change My Password
                </button>

                {error && <p> {error.message}</p>}
            </form>
            </div>
        );
    }
}



export default PasswordChangeForm;
