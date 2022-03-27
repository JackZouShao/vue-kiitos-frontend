
import axios from "axios";
import router from '../router/index.js'


let config = {
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
        'Authorization': '',
    }
}

export function getTimeline(userName, start, end){
    config.headers.Authorization = '';
    config.headers.Authorization = 'bearer ' + localStorage.token;
    console.log('userName', userName)
    return  axios.get('/kiitos-timeline/timeline/'+ userName +'?start='+start +'&end='+ end,  config )
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getFollowerCount(username){
    config.headers.Authorization = '';
    config.headers.Authorization = 'bearer ' + localStorage.token;
    return  axios.get('/kiitos-user/kiitosUserRelation/followers-count/'+ username , config )
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getFolloweeCount(username){
    config.headers.Authorization = '';
    config.headers.Authorization = 'bearer ' + localStorage.token;
    return  axios.get('/kiitos-user/kiitosUserRelation/following-count/'+username, config )
        .then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}