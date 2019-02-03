import React, {Component} from 'react';
import {app } from '../firebase/firebase';
import { Table} from 'react-bootstrap';
import axios from "axios" ;
import './App.css';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom' ;
import './App.css';
import WithAuthorization from "./withAuthorizationnnn";
import AuthUserContext from './AuthUserContext';


class Approvationpost extends Component {
    constructor(props) {
        super(props);
        this.approveroot = app.database().ref().child('app').child('addpost');

        this.state = {
            addd: []
        };
        this.approve = this.approve.bind(this);
    }

    // show companys that wait for approvation
    componentWillMount() {
        axios.get('/writePost')
            .then(response =>
                this.setState({
                    addd: response.data
                }));
    }

        approve = (add) => {
            axios.post('/approve', add);
            axios.delete('/approve/'+ add._id);
            alert( " Process is done " );
            this.forceUpdate();
        }

    render() {

        return (
            <AuthUserContext.Consumer>

                {authUser =>

                    <div className= "approvation">

                        {this.state.addd.filter((n) => n.approve==0 ).map((add) => {

                            return (
                                <div key={add._id}>
                                    <MediaQuery minWidth={800} className="pages" >

                                        <h1> Please approve this new company</h1>
                                        <div>

                                            <Table striped bordered condensed hover>

                                                <tbody>
                                                <tr>
                                                    <td>Type</td>
                                                    <td>{add.ro}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>User Name</td>
                                                    <td>{add.user}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>Name of Company</td>
                                                    <td>{add.name}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Web Address</td>
                                                    <td>{add.link}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Explanation</td>
                                                    <td>{add.text}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Need</td>
                                                    <td>{add.need}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> More</td>
                                                    <td>{add.more}</td>
                                                </tr>
                                                </tbody>


                 </Table>

                            <button
                            type="button"
                            onClick={()=> this.approve(add)}
                        >
                            Approve

                            </button>
                                        </div>

                                    </MediaQuery>

                                    <MediaQuery maxWidth={800}  >
                                        Not accessible
                                    </MediaQuery>
                                </div>
                            )
                        })}


                    </div>
                }
            </AuthUserContext.Consumer>

        );
    }
}

const ApprovationpostForm = () =>
    <form className="loginStyles">
        <Link to="/approvationpost"> <h1>  To Approve the Posts </h1> </Link>
        <br/>
        <h3>Just managers can access this part</h3>
    </form>



const authCondition = (authUser) =>  authUser ?

    authUser.uid === "FyPk0xDy60X1FDZ0LKcBY5tIuDh2"
    :    null;


export default WithAuthorization (authCondition) (Approvationpost);


export  {ApprovationpostForm} ;
