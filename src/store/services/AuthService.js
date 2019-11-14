import HttpService from './HttpService';

export const SignUpService = (credentials) =>{

    const http = new HttpService();

    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data)) 
        return data;
    }).catch(error =>console.log(error));
}

export const LoginUser = (credentials,propsHistory) =>{

    const http = new HttpService();
    let signUpUrl = "user/login"; // SAMO SE RUTA PROMENILA
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data))
        return data;
    }).catch(error =>console.log(error));

}

