export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function loginSuccess(user){
    window.location = '/';
    return {type: AUTHENTICATED, payload: user};
}

export function loginFail(error){
    return {type: UNAUTHENTICATED, payload: error};
}

export function loginError(error){
    return {type: AUTHENTICATION_ERROR, payload: error};
}