import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import './App.css';

const SignUpStyles = {
    width: "90%",
    maxWidth: "350px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
}

const SignUpPage = ({history}) =>
    <div className="pages">
        <h1>SignUp </h1>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE= {
    email: '',
    passwordOne:'',
    passwordTwo:'',
    error:null
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
        }= this.state;

        const {
            history,
        }=this.props;

        auth.doCreateUserWithEmailAndPassword(email , passwordOne)
                    .then(authUser =>{
                                     console.log(authUser);
                             this.setState(() => ({...INITIAL_STATE}));
                             history.push(routes.HOME);
                         })
                         .catch(error => {
                            this.setState(byPropKey('error', error));
                         });

                      event.preventDefault();
}

render() {
    const {
        email,
        passwordOne,
        passwordTwo,
        error
    }=this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ;

    return(
        <form style={SignUpStyles}  onSubmit={this.onSubmit}>

            <input value={email}
                   style={{width: "100%"}} className="pt-button pt-intent-primary"
                   onChange={ event => this.setState(byPropKey('email', event.target.value))}
                   type="email"
                   placeholder="Email"
            />
            &nbsp; &nbsp;
            <input value={passwordOne}
                   style={{width: "100%"}} className="pt-button pt-intent-primary"
                   onChange={ event => this.setState(byPropKey('passwordOne', event.target.value))}
                   type="password"
                   placeholder="PasswordOne"
            />
            &nbsp; &nbsp;
            <input value={passwordTwo}
                   style={{width: "100%"}} className="pt-button pt-intent-primary"
                   onChange={ event => this.setState(byPropKey('passwordTwo', event.target.value))}
                   type="password"
                   placeholder="PasswordTwo"
            />
            &nbsp; &nbsp;

            <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
            <button disabled={isInvalid} style={{width: "100%"}} className="pt-button pt-intent-primary" type="submit">
                Sign Up
            </button>

            <br />
            <br />

            {error && <p>{error.message} </p>}

        </form>
    );
}
}


const SignUpLink=() =>

    <h2>
        Don't have an account?
        {''}
        <Link to={routes.SIGN_UP}> Sign Up  </Link>
    </h2>


export default withRouter(SignUpPage);

export {SignUpForm,
    SignUpLink
};