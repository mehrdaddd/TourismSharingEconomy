import React, {Component} from 'react';
import { Table} from 'react-bootstrap';
import './App.css';
import axios from "axios" ;
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom' ;
import './App.css';
import WithAuthorization from "./withAuthorizationnnn";
import  AuthUserContext from './AuthUserContext';

class Approvation extends Component {
    constructor(props){
        super(props);
        this.state= {
            addd:[]
        };
        this.approve= this.approve.bind(this);
    }


    // show companys that wait for approvation
    componentWillMount() {

        axios.get('/aproveCompany')
            .then(response => {
                    this.setState({
                        addd: response.data
                    });

                }
            );
    }



    approve = (opp, add) => {

        axios.post('/aproveCompany/'+ opp.head, add);
        axios.delete('/aproveCompany/'+ opp.head + '/'+ add._id);
        alert( " Process is done " );
        this.forceUpdate();
    }



    //approve the company add copany to list and remove from aprovation



    render() {

        return (
            <AuthUserContext.Consumer>

                {authUser =>
                     <div className = "approvation" >
                                      {this.state.addd.map((opp) => {

                                                        return (

                                                                < div key = {opp._id}>

                                                                     {opp.company.map((add) => {

                                                                    return (
                                                                        < div
                                                                    key = {add._id
                                                                }>
                                                                <
                                                                    MediaQuery
                                                                    minWidth = {800}
                                                                    className = "pages" >

                                                                        < h1 > Please
                                                                    approve
                                                                    this
                                                                    new company < /h1>
                                                                    < div >

                                                                    < Table
                                                                    striped
                                                                    bordered
                                                                    condensed
                                                                    hover >

                                                                    < tbody >


                                                                    < tr >
                                                                    < td > Type
                                                                    of
                                                                    organization < /td>
                                                                    < td > {opp.head
                                                                }<
                                                                    /td>
                                                                    < /tr>
                                                                    < /tbody>

                                                                    < tbody >
                                                                    < tr >
                                                                    < td > Full
                                                                    Name < /td>
                                                                    < td > {add.fullname
                                                                }<
                                                                    /td>
                                                                    < /tr>
                                                                    < /tbody>

                                                                    < tbody >
                                                                    < tr >
                                                                    < td > Email
                                                                    Address < /td>
                                                                    < td > {add.email
                                                                }<
                                                                    /td>
                                                                    < /tr>
                                                                    < /tbody>

                                                                    < tbody >
                                                                    < tr >
                                                                    < td > Name
                                                                    of
                                                                    Company < /td>
                                                                    < td > {add.name}
                                                                    </td>
                                                                    < /tr>
                                                                    < /tbody>

                                                                    < tbody >
                                                                    < tr >
                                                                    < td > Web
                                                                    Address < /td>
                                                                    < td > {add.link}
                                                                    <
                                                                    /td>
                                                                    < /tr>
                                                                    < /tbody>

                                                                    < tbody >
                                                                    < tr >
                                                                    < td > Explanation < /td>
                                                                    < td > {add.text}</td>
                                                                    < /tr>
                                                                    < /tbody>


                                                                    < /Table>


                                                                         < button
                                                                         type = "button"
                                                                         onClick = {() => this.approve(opp,add)} >
                                                                         Approve

                                                                         < /button>

                                                                    < /div>

                                                                    < /MediaQuery>

                                                                    < MediaQuery maxWidth = {800} >
                                                                        Not accessible
                                                                    < /MediaQuery>
                                                                    < /div>
                                                                )
                                                                })}


                                                                </div>
                                                        )
                                            })}
                      </div>
                }
            </AuthUserContext.Consumer>

        )
    }
}









const ApprovationForm = () =>
    <form className="loginStyles">
        <Link to="/approvation"> <h1>  To Approve the new Company </h1> </Link>
        <br/>
        <h3>Just managers can access </h3>
    </form>



const authCondition = (authUser) =>  authUser ?

    authUser.uid === "FyPk0xDy60X1FDZ0LKcBY5tIuDh2"
    :    null;


export default WithAuthorization (authCondition) (Approvation);


export  {ApprovationForm} ;

