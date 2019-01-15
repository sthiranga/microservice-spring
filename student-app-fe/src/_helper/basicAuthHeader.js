
export function basicAuthHeader() {
    const clientId = 'student-fe';
    const clientSecret = 'password';
    const encodeValue = btoa(clientId + ":" + clientSecret);
    console.log("encode : "+encodeValue);
    if(clientId && clientSecret){
        return {'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encodeValue};
    }else{
        return {};
    }
}