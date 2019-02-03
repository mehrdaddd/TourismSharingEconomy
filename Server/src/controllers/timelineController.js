import mongoose from 'mongoose';

import { PostSchema} from '../models/PostModel';
import { rateSchema} from '../models/rateModel';
import {CommentGroupSchema} from '../models/commentModel';
const aprPost = mongoose.model('aprPost', PostSchema);
const Post = mongoose.model('Post', PostSchema);
const CommentGroup = mongoose.model('CommentGroup', CommentGroupSchema);

export const newPost = (req, res) => {
    let newPost = new aprPost(req.body);
    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};

export const getPosts = (req, res) => {
    aprPost.find({}, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};

export const approvePost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};


export const deletePost = (req, res) => {
    aprPost.remove({_id: req.params.postId},(err) => {
        if (err) {
            res.send(err);
        }
        res.json({message:"Deleted!"});
    });
};



export const retrivePosts = (req, res) => {
    Post.find({}, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};

export const newRatePost = (req, res) => {
    Post.findOne({_id: req.params.postId }, (err, post) => {
        post.rate.push( req.body );

        var rate= post.rate;
        var sum = 0 ;
        var i=0;
        rate.map((points) => {
            i +=1;
            sum += points.star;
        });

        post.orate= sum/i;
        post.save();
        res.json(post.orate);

    });
};

export const newCommentPost = (req, res) => {
    Post.findOne({_id: req.params.postId }, (err, post) => {
        post.commentGroup.push( req.body );
        post.save();
        res.json(post);
    });
};
