import React from 'react';
import  AuthUserContext from './AuthUserContext';
import  {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import WithAuthorization from './withAuthorizationnnn';
import 'bootstrap';
import {ApprovationForm} from './Approvation';
import {ApprovationpostForm} from './Approvationpost';
import {AddMoreForm} from "./AddMore";
import {PostForm} from "./Post";
import {TravelogueForm} from "./WriteTravelogue";
import {ProfileForm} from "./Profile";
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';

const AccountPage =() =>

    <AuthUserContext.Consumer>

        {authUser =>

            <div>
                <MediaQuery minWidth={800} >



                    <div className="gutter-example">


                        <Row gutter={2}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">  <PasswordForgetForm /> </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box"><PasswordChangeForm /></div>
                            </Col>

                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">  <PostForm /> </div>
                            </Col>

                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box"> <AddMoreForm /> </div>
                            </Col>
                        </Row>

                        <Row gutter={2}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">  <ProfileForm /> </div>
                            </Col>

                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box"> <ApprovationForm /> </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">  <ApprovationpostForm /> </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">  <TravelogueForm /> </div>
                            </Col>
                        </Row>

                    </div>


                </MediaQuery>

                <MediaQuery maxWidth={800}>
                    <PasswordForgetForm />
                    <PasswordChangeForm />
                    <ApprovationForm />
                    <AddMoreForm />
                    <ProfileForm />
                    <PostForm />
                    <ApprovationpostForm />
                </MediaQuery>
            </div>
        }
    </AuthUserContext.Consumer>


const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(AccountPage);