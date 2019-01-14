import {AUTHENTICATED} from "../_actions/user.action";
import {UNAUTHENTICATED} from "../_actions/user.action";
import {AUTHENTICATION_ERROR} from "../_actions/user.action";

const InitialUserState = {
        user:{},
        error: ''
};

export function userReducer(state=InitialUserState, action){
    switch(action.type){
        case AUTHENTICATED:
            return { ...state, user:action.payload, error:''};
            break;
        case UNAUTHENTICATED:
            return { ...state, error:action.payload};
            break;
        case AUTHENTICATION_ERROR:
            return { ...state, error:action.payload};
            break;
        default:
            return state;
    }
}