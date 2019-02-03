import React, { Component } from 'react';
import './App.css';
import Avatar from '@atlaskit/avatar';
import Comment, {
    CommentAuthor,
    CommentTime,
    CommentAction,
} from '@atlaskit/comment';
import { Input, Icon } from 'antd';
import { Collapse } from 'antd';
import axios from "axios" ;
const Panel = Collapse.Panel;

// main class
class Commentt extends Component {
    constructor(props){
        super(props);
        this.state = {
            revises: [],
            comment: '',
        };
        if(this.props.lm ){
            this.state = {
                revises: this.props.lm,
            };
        }

        this.emitEmpty = this.emitEmpty.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this);
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ comment: '' });
    }
    onChangecomment = (e) => {
        this.setState({ comment: e.target.value });
    }



    //push data to database
    enterr = (e) => {
        if( this.props.panel== "timeline") {

            axios.post('/' + this.props.panel + '/comment/' + this.props.onPressEnterr, {
                    text: e.target.value,
                    name: 'user'
                }
            )
        }
        else if(this.props.panel== "home"){
                    console.log()
            axios.post('/' + this.props.panel + '/comment/' + this.props.addr +'/'+ this.props.onPressEnterr, {
                    text: e.target.value,
                    name: 'user'
                }
            )
    }




        this.emitEmpty();
        this.forceUpdate();
    }


    render() {

        const { comment } = this.state;
        const suffix = comment ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

        return (
            <div className="comment">
                <Collapse accordion>
                    <Panel header="Comments" >

                        <Input
                            placeholder=" Write your comment"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value=  {comment}
                            onChange={this.onChangecomment}
                            ref={node => this.userNameInput = node}
                            onPressEnter={ this.enterr}

                        />

                        {this.state.revises.map((com) => {
                            return (
                                <div  key={com._id} style={{margin: 7}}>
                                    <Comment
                                        avatar={<Avatar label="Atlaskit avatar" size="medium"/>}
                                        author={<CommentAuthor>{com.name}</CommentAuthor>}
                                        time={<CommentTime>{com.date}</CommentTime>}
                                        content={
                                            <p className="commentext">
                                                {com.text}
                                            </p>
                                        }

                                        actions={[
                                            <CommentAction>Reply</CommentAction>,
                                            <CommentAction>Like</CommentAction>,
                                        ]}
                                    />
                                </div>
                            );
                        })}


                    </Panel>
                </Collapse>
            </div>

        );
    }
}

export default Commentt;