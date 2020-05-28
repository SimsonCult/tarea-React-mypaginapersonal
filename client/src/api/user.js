import {apiVersion, basePath} from './config';

export function signInApi(data){
    const url = `http://localhost:3977/api/v1/sign-up`;

    const params = {
        method : "POST",
        body : JSON.stringify(data),
        header : {
            "Content-Type" : "aplication/json"
        }
    };

    

    fetch(url, params)
        .then(response =>{
           console.log(response);
           
        })
}
