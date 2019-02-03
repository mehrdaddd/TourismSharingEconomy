import React from 'react' ;
import {withRouter} from 'react-router-dom';
import  {firebase} from '../firebase' ;
import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';

const WithAuthorizationnnn = (authCondition) => (Component) => {
    class WithAuthorizationnnn extends  React.Component{

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if( !authCondition(authUser)){
                    this.props.history.push(routes.SIGN_IN);
                }

            });
        }

        render (){

            return (
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component/> : null}
                </AuthUserContext.Consumer>
            );
        }
    }

    return withRouter(  WithAuthorizationnnn);
}


export default WithAuthorizationnnn;