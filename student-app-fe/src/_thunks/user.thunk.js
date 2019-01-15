import axios from 'axios';
import {MockAdapter} from 'axios-mock-adapter';
import {loginSuccess} from '../_actions/user.action';
import {user} from '../_mock/user.mock';
import {basicAuthHeader} from '../_helper/basicAuthHeader';
import {authHeader} from '../_helper/authHeader';

export const login = (username, password) => dispatch =>{

    const loginUrl = 'http://localhost:8080/oauth/token';
    const userLoadUrl = 'http://localhost:8080/user/user';
    let headers = basicAuthHeader();
    let params = {
        grant_type:'password',
        username: username,
        password: password
    }
    let config = {
        headers: headers,
        params: params
    }

    axios.post(loginUrl, null,config)
    .then((response)=>{
        let accessToken = response.data.access_token;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        let headers = authHeader();
        return axios.get(userLoadUrl,{headers:headers});
        //dispatch(loginSuccess("data"));
    })
    .catch(error => {
        //dispatch(fetchApiDataFailure(error));
    });

};
