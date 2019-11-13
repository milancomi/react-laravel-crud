import HttpService from './HttpService';

export const SignUpService = (credentials) =>{
    const http= HttpService();
    console.log(HttpService); 
    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data))
        return data;
    }).catch(error =>console.log(error));
}