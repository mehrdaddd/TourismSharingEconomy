import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import  {auth} from '../firebase';
import './App.css';


const PasswordForgetPage = () =>
    <div>
        <PasswordForgetForm />
    </div>


const byPropKey = ( propertyName , value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetForm extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {email}= this.state;
        auth.doPasswordReset(email)
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
            email,
            error
        }=this.state;

        const isInvalid = email ==='';

        return (
            <form  onSubmit={this.onSubmit} className="loginStyles"   >

                <h1>
                    Password Forget
                </h1>
                <input

                    style={{width: "100%"}}
                    value={this.state.email}
                    onChange={ event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address" />

                &nbsp; &nbsp;

                <br />
                <br />

                <button disabled={isInvalid} type="submit"  style={{width: "100%"}} >
                    Reset My Password
                </button>

                {error && <p> {error.message}</p>}
            </form>

        );
    }
}

const PasswordForgetLink= () =>

    <h3 >
        <Link to="/pw-forget"> Forget Password? </Link>
    </h3>


export default PasswordForgetPage;

export {
   PasswordForgetForm,
   PasswordForgetLink
};