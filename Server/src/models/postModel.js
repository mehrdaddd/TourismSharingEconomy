import mongoose from 'mongoose';
import {CommentGroupSchema} from "./commentModel";
import {RateSchema} from "./rateModel"
const Schema = mongoose.Schema;


export const PostSchema = new Schema({
    link: String,
    name:String,
    user:String,
    need:String,
    ro: String,
    more: String,
    text: String,
    rate: [RateSchema],
    orate: Number,
    approve: Number,
    commentGroup: [CommentGroupSchema],
    select: {
        Accommodation: Boolean,
        Flight : Boolean,
        Information : Boolean,
        Multifunctional : Boolean,
        Restaurants : Boolean,
        Social: Boolean,
        Taxi : Boolean,
        Tools : Boolean,
        Tours : Boolean,
        Train : Boolean,
    }
});

