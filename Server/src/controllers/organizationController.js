import mongoose from 'mongoose';
import { CompanySchema } from '../models/companyModel';
import { OrganizationSchema } from '../models/organizationModel';
import {CommentGroupSchema} from '../models/commentModel';
const Company = mongoose.model('Company', CompanySchema);
const commentGroup = mongoose.model('CommentGroup', CommentGroupSchema);
const Organization = mongoose.model('Organization', OrganizationSchema);
const ApprovedOrganization = mongoose.model('ApprovedOrganization',OrganizationSchema);


export const addNewCompany = (req, res) => {
    Organization.findOne({ head: req.params.organizationId }, (err, org) => {
        org.company.push( req.body );
        org.save();
        res.json(org);
    });
};

export const getcompany = (req, res) => {
    Organization.find({}, (err, approve) => {
            if (err) {
                res.send(err);
            }
            res.json(approve);
        });
};

export const deleteCompany = (req, res) => {
    Organization.findOne({ head: req.params.organizationHead }, (err, org) => {
        org.company.id( req.params.companyId).remove();
        org.save();
        res.json(org);

    });

};



export const approvedCompany = (req, res) => {
    ApprovedOrganization.findOne({ head: req.params.organizationId }, (err, org) => {

        org.company.push( req.body );
        org.save();
        res.json(org);
    });
};

export const getCompanies = (req, res) => {
    ApprovedOrganization.find({}, (err,companies) => {
        if (err) {
            res.send(err);
        }
        res.json(companies);
    });
};


export const newCommentCompany = (req, res) => {
    ApprovedOrganization.findOne({ head: req.params.organizationId}, (err, m)=> {

        const l= Object.assign({}, m);
        const company= l._doc.company;
        const f= company.filter(  uy => uy.id == req.params.companyId);
        const i= f[0] ;
        i.commentGroup.push( req.body );
        m.save();
        res.json(m);

    });
};


export const newRateCompany = (req, res) => {
    ApprovedOrganization.findOne({ head: req.params.organizationId}, (err, m)=> {
        const l= Object.assign({}, m);
        const company= l._doc.company;
        const f= company.filter(  uy => uy.id == req.params.companyId);
        const u= f[0] ;
        u.rate.push( req.body );

        var rate = u.rate;
        var sum = 0;
        var i = 0;
        rate.map((points) => {
            i += 1;
            sum += points.star;
        });

        u.orate = sum / i;
            m.save();
            res.json(m);
        });

};
