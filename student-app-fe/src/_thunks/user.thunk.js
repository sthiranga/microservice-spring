import axios from 'axios';
import {MockAdapter} from 'axios-mock-adapter';
import {loginSuccess} from '../_actions/user.action';
import {user} from '../_mock/user.mock';

export const login = (username, password) => dispatch =>{

    const loginUrl = 'http://localhost:8080/user/login';

    /*axios.post(loginUrl, {
        username: username,
        password: password
    })
    .then((response)=>{
        console.log("Data received in thunk",response);
        sessionStorage.setItem('userId', user.id);
        dispatch(loginSuccess("data"));
    })
    .catch(error => {
        //dispatch(fetchApiDataFailure(error));
    });*/
    sessionStorage.setItem('userId', user.id);
    dispatch(loginSuccess(user));
};
