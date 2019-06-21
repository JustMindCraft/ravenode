// in src/authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';


export default (type:string, params:any) => {
    console.log(params);
    
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('/api/v1_0/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password, authType: "password" }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {

                if(response.status === 404){
                    throw new Error("auth.404");
                }
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("ra.auth.sign_in_error");
                }
                
                return response.json();
            })
            .then((rlt:any) => {
                return localStorage.setItem('token', rlt.data);
            });
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};