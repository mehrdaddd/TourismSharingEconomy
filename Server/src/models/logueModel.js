import mongoose from 'mongoose';
import {CommentGroupSchema} from "./commentModel";
import {RateSchema} from "./rateModel"
const Schema = mongoose.Schema;


export const LogueSchema = new Schema({
    travelogue: String,
    user:String,
    ro: String,
    more: String,
    rate: [RateSchema],
    orate: Number,
    commentGroup: [CommentGroupSchema],
    select: {
        SportsTourism: Boolean,
        ReligionTourism: Boolean,
        Educational: Boolean,
        Medical: Boolean,
        NatureWildlifeTourism: Boolean,
        Trade: Boolean,
        Tours: Boolean,
        Food: Boolean,
    }
});

