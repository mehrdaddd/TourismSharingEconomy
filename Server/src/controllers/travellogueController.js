import mongoose from 'mongoose';

import { LogueSchema} from '../models/logueModel';
import {CommentGroupSchema} from '../models/commentModel';

const Logue = mongoose.model('Logue', LogueSchema);
const CommentGroup = mongoose.model('CommentGroup', CommentGroupSchema);

export const newLogue = (req, res) => {
    let newLogue = new Logue(req.body);
    newLogue.save((err, logue) => {
        if (err) {
            res.send(err);
        }
        res.json(logue);
    });
};

export const getLogues = (req, res) => {
    Logue.find({}, (err, logue) => {
        if (err) {
            res.send(err);
        }
        res.json(logue);
    });
};

export const newComment = (req, res) => {
    Logue.findOne({_id: req.params.profileId }, (err, post) => {
        post.commentGroup.push( req.body );
        post.save();
        res.json(post.commentGroup);
    });
};

export const newRate = (req, res) => {
    Logue.findOne({_id: req.params.rateId }, (err, post) => {
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

