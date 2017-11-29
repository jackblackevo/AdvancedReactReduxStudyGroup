import {CHANGE_AUTH} from './type';


export function authenticate(isLoggedIn){


    return {

          type:CHANGE_AUTH,
          payload:isLoggedIn

    }


}
