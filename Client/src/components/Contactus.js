import React, {Component} from 'react';
import { Table} from 'react-bootstrap';
import './App.css';
import MediaQuery from 'react-responsive';




class Componentt extends Component {
    render() {

        return (
            <div >

                <MediaQuery minWidth={800} className="pages">
                    <h1>Contact US</h1>
                    <div className= "contactusm">
                        <Table striped bordered condensed hover>

                            <tbody>
                            <tr>
                                <td>E-mail Address</td>
                                <td>passengertuorist@gmail.com</td>
                            </tr>
                            </tbody>

                            <tbody>
                            <tr>
                                <td>Facebook</td>
                                <td>...</td>
                            </tr>
                            </tbody>

                            <tbody>
                            <tr>
                                <td>Instagram</td>
                                <td>...</td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>Address</td>
                                <td>Kiel, Germany</td>
                            </tr>
                            </tbody>

                        </Table>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={800}>
                    <h1>Contact US</h1>
                    <div className= "contactuss">

                        <Table striped bordered condensed hover>

                            <tbody>

                                <tr>
                                    <td>E-mail Address</td>
                                </tr>
                                <tr>

                                    <td>passengertuorist@gmail.com</td>

                                </tr>
                                <tr>

                                    <td>Facebook</td>

                                </tr>
                                <tr>


                                    <td>...</td>

                                </tr>
                                <tr>

                                    <td>Instagram</td>

                                </tr>
                                <tr>

                                    <td>...</td>

                                </tr>
                                <tr>

                                    <td>Address</td>


                                </tr>
                                <tr>

                                    <td>Kiel, Germany</td>

                                </tr>

                            </tbody>

                        </Table>
                    </div>

                </MediaQuery>
            </div>
        );
    }
}

export default Componentt;

