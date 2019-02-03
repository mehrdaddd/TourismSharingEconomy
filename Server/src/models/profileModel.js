import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProfileSchema = new Schema({

        Bio: {
            type: String
        },
        Comments: {
            type: String
        },
        Company: {
            type: String
        },
        EmailAddress: {
            type: String
        },
        JobSStatus: {
            type: String
        },
        Languages: {
            type: String
        },
        Links: {
            type: String
        },
        Messages: {
            type: String
        },
        More: {
            type: String
        },
        Namee: {
            type: String
        },
        Places: {
            type: String
        },
        Posts: {
            type: String
        },
        Rats: {
            type: String
        },
        Status: {
            type: String
        },
        User: {
            type: String
        },
        Website: {
            type: String
        },
        Willing: {
            type: String
        }


});

