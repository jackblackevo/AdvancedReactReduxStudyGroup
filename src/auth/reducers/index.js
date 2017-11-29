import {combineReducers} from "redux";
import isSignInReducer from  "./isSingInReducer";

const rootReducer = combineReducers({

     isSignIn : isSignInReducer

});


export default rootReducer;


