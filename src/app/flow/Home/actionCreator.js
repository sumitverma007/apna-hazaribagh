import axios from 'axios'
import { homeResponse } from './dummyResponse';
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const token = cookies.get('apn_hzb')

export const getHomePost = (callbackFn) => {
    let config = {
        "headers" : {
            "Authorization" : "Bearer " + token
        }
    }

    let url = `/get-home-post`
    return dispatch => {
        return axios.get(url , config)
        .then(resp => {
            // callbackFn && callbackFn(resp)
            callbackFn && callbackFn(homeResponse)
        },
        err => {
            callbackFn && callbackFn(homeResponse)
            console.log(err)
        }
    )}
}


export default {
    getHomePost
}
