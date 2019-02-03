import mongoose from 'mongoose';
import {CommentGroupSchema} from "./commentModel";
import {RateSchema} from "./rateModel";

const Schema = mongoose.Schema;


export const CompanySchema = new Schema({

    name : String,
    link : String,
    text  : String,
    fullname: String,
    email: String,
    commentGroup : [CommentGroupSchema],
    rate: [RateSchema],
    orate: Number,

});