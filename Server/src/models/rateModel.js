import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RateSchema = new Schema({
    star: Number
});