import axios from "axios";
import router from '../router/index.js'
let config = {
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
    },

}
export function login(data, username){

    axios.post('/kiitos-auth/oauth/token?'+data )
        .then(function (response) {
            console.log()
            router.push({
                path:  `/blog`,
                query:{
                    user:{
                        userId: response.data.id,
                        username: username,
                        token: response.data.access_token
                    }
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function register(data){
    axios.post('/kiitos-auth/user/register', data, config)
        .then(function (response){
            console.log(data)
            router.push('/login').then(r => r)
        })
        .catch(function (error){
            console.log(error)
        })
}
