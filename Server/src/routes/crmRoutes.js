
import {
    addNewProfile,
    getProfiles,
    updateProfile,
} from '../controllers/profileController';

import {
    getLogues,
    newLogue,
    newComment,
    newRate,


} from '../controllers/travellogueController';

import {
    newPost,
    getPosts,
    approvePost,
    deletePost,
    retrivePosts,
    newRatePost,
    newCommentPost,
} from '../controllers/timelineController';

import {
    addNewCompany,
    newCommentCompany,
    getcompany,
    approvedCompany,
    deleteCompany,
    getCompanies,
    newRateCompany,
} from '../controllers/organizationController';

const routes = (app) => {

    // profiles
    app.route('/profiles')
        .post(addNewProfile)
        .get(getProfiles);
    app.route('/profiles/:profileId')
        .put(updateProfile);


    // Travelogue
    app.route('/travellogue')
        .post(newLogue)
        .get(getLogues);
    app.route('/travellogue/comment/:profileId')
        .post(newComment);
    app.route('/travellogue/rate/:rateId')
        .post(newRate)



    //Timeline
    app.route('/writePost')
        .post(newPost)
        .get(getPosts);

    app.route('/approve')
        .post(approvePost);
    app.route('/approve/:postId')
        .delete(deletePost);
    app.route('/timeline')
        .get(retrivePosts);
    app.route('/timeline/rate/:postId')
        .post(newRatePost);
    app.route('/timeline/comment/:postId')
        .post(newCommentPost);



    //Organization
    app.route('/organization/:organizationId')
         .post(addNewCompany);

    app.route('/aproveCompany')
         .get(getcompany);
    app.route('/aproveCompany/:organizationId')
        .post(approvedCompany);
    app.route('/aproveCompany/:organizationHead/:companyId')
        .delete(deleteCompany);


    app.route('/home')
        .get(getCompanies);
    app.route('/home/comment/:organizationId/:companyId')
        .post(newCommentCompany);
    app.route('/home/rate/:organizationId/:companyId')
        .post(newRateCompany);
}





export default routes;
