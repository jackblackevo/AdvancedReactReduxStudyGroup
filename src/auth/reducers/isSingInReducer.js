import {CHANGE_AUTH} from "../actions/type";


export default function isSignInReducer (state = false, action={type:"", payload:false} ){


  switch(action.type){


case CHANGE_AUTH:


    return action.payload

   break;

 default:

    return state;

  }





}
