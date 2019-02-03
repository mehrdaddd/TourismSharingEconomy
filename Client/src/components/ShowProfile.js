import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import './App.css';
import { Table} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import { Well, Image }from 'react-bootstrap';
import { FormControl, input,textarea, select, Checkbox, Radio,FormGroup,ControlLabel,Button,HelpBlock} from 'react-bootstrap';
import {app} from "../firebase/firebase";
import  AuthUserContext from './AuthUserContext';



const INITIAL_STATE = {
    Namee:0,
    EmailAddress: 0,
    JobSStatus: 0,
    Company: 0,
    Website: 0,
    Bio: 0,
    Willing: 0,
    Links: 0,
    Status: 0,
    Messages: 0,
    Rats: 0,
    Posts: 0,
    Comments: 0,
    Languages: 0,
    Places: 0,
    More: 0,
}


class ShowProfile extends Component {
    constructor(props) {
        super(props);
        this.userroot = app.database().ref().child('app').child('userprofile');
        this.state = { ...INITIAL_STATE , pro:[], n:0 };
        this.foo = this.foo.bind(this);
        this.fill = this.fill.bind(this);
    }


    foo = ( authuser) => item => {
           const mi=  this.props.match.params.uid ;
        if (item.User ===  mi) {
            this.state.n = 1;
        }
    };


    fill = ( authuser) => item => {
        const mi=  this.props.match.params.uid ;
        if (item.User === mi) {
            this.state.User = mi;
            return 1;
        }
        else if( this.state.n === 0 && !item.User){
            this.state.User = item.User;
            return 1
        }
    };


    componentWillMount() {


        const ppro= this.state.pro ;
        this.userroot.on('child_added', s => {
            ppro.push({
                id: s.key,
                Namee: s.child('Namee').val(),
                EmailAddress: s.child('EmailAddress').val(),
                User: s.child('User').val(),
                JobSStatus: s.child('JobSStatus').val(),
                Company: s.child('Company').val(),
                Website: s.child('Website').val(),
                Bio: s.child('Bio').val(),
                Willing: s.child('Willing').val(),
                Links: s.child('Links').val(),
                Status: s.child('Status').val(),
                Messages: s.child('Messages').val(),
                Rats: s.child('Rats').val(),
                Posts: s.child('Posts').val(),
                Comments: s.child('Comments').val(),
                Languages: s.child('Languages').val(),
                Places: s.child('Places').val(),
                More: s.child('More').val(),
            })
            this.setState({

                pro: ppro,
                n: 0
            });

        });
    }


    render() {

        return (

            <div>

                <AuthUserContext.Consumer>

                    {authUser =>  this.state.pro.map(this.foo(authUser))}

                </AuthUserContext.Consumer>
                <AuthUserContext.Consumer>

                    {authUser =>

                        <div >

                            {this.state.pro.filter(this.fill( authUser)).map( item => {
                                return (
                                    <div key={item.id}  >
                                        < MediaQuery minWidth={1100} className="pages">
                                            <h1>Profile </h1>

                                            <form className="profilesm" >

                                                <Table striped bordered condensed hover>

                                                    <tbody>
                                                    <tr>

                                                        <td> Name </td>
                                                        <td> {this.props.match.params.uid}
                                                        </td>

                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>E-mail Address (necessary)</td>
                                                        <td>{item.EmailAddress}

                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>Job status</td>
                                                        <td>{item.JobSStatus}
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td> Company</td>
                                                        <td>{item.Company}

                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                    <tbody>
                                                    <tr>
                                                        <td>Website of company</td>
                                                        <td>{item.Website}

                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                </Table>
                                                <h2>Bio</h2>

                                                <Well>
                                                    {item.Bio}
                                                </Well>
                                                <h2>Willing to</h2>
                                                <Well>
                                                    {item.Willing}

                                                </Well>
                                                <h2>Links</h2>
                                                <Well>
                                                    {item.Links}

                                                </Well>
                                                <h2> Status</h2>
                                                <Well>
                                                    {item.Status}


                                                </Well>
                                                <h2>Messages</h2>
                                                <Well>
                                                    {item.Messages}
                                                </Well>
                                                <h2>Posts</h2>
                                                <Well>
                                                    {item.Posts}

                                                </Well>
                                                <h2>Comments</h2>
                                                <Well>
                                                    {item.Comments}

                                                </Well>
                                                <h2>Raitngs</h2>
                                                <Well>
                                                    {item.Rats}

                                                </Well>
                                                <h2>Languages</h2>
                                                <Well>
                                                    {item.Languages}

                                                </Well>
                                                <h2>Places</h2>
                                                <Well>
                                                    {item.Places}

                                                </Well>
                                                <h2>More</h2>
                                                <Well>
                                                    {item.More}

                                                </Well>


                                            </form>

                                        </MediaQuery>
                                        <MediaQuery maxWidth={1100}>
                                            <h1>Profile</h1>

                                        </MediaQuery>

                                    </div>
                                )
                            })}
                        </div>

                    }
                </AuthUserContext.Consumer>
            </div>

        );
    }
}




const ShowProfileForm = () =>
    <form className="loginStyles">
        <Link to='/profile'> <h1> Profile </h1> </Link>
        <br/>
        <h3> Complete your profile to have better collaboration</h3>
    </form>



export default ShowProfile;

export {ShowProfileForm};


