import mongoose from 'mongoose';
import {CompanySchema} from "./companyModel";
const Schema = mongoose.Schema;


export const OrganizationSchema = new Schema({

    head : String,
    text : String,
    company: [CompanySchema],


});

