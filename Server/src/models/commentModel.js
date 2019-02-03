import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CommentGroupSchema = new Schema({
    name: String,
    text: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});