
export function authHeader() {
    let accessToken = localStorage.getItem('access_token')
    if(accessToken){
        return {'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken};
    }else{
        return {};
    }
}