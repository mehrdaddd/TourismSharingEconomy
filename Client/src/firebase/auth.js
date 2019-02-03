import  {auth} from './firebase';





// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password) ;

// Sign in
export const doSignInEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);


