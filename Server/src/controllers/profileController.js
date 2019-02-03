import mongoose from 'mongoose';

import { ProfileSchema } from '../models/profileModel';


const Profile = mongoose.model('profile', ProfileSchema);


export const addNewProfile = (req, res) => {
    let newContact = new Profile(req.body);

    newContact.save((err, profile) => {
        if (err) {
            res.send(err);
        }
        res.json(profile);
    });
};

export const getProfiles = (req, res) => {
    Profile.find({}, (err, profile) => {
        if (err) {
            res.send(err);
        }
        res.json(profile);
    });
};

export const updateProfile = (req, res) => {
    Profile.findOneAndUpdate({ _id: req.params.profileId}, req.body, { new: true }, (err, profile) => {
        if (err) {
            res.send(err);
        }
        res.json(profile);
    })
}

