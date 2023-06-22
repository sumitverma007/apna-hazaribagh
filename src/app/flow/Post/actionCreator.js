import axios from 'axios'
import { dummyPostRespone } from './dummyResponse';
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const token = cookies.get('apn_hzb')

export const getPost = (slug,callbackFn) => {
    let config = {
        "headers" : {
            "Authorization" : "Bearer " + token
        }
    }

    let url = `/get-post?postName=${slug}`
    return dispatch => {
        return axios.get(url , config)
        .then(resp => {
            // callbackFn && callbackFn(resp)
            callbackFn && callbackFn(dummyPostRespone)
        },
        err => {
            callbackFn && callbackFn(dummyPostRespone)
            console.log(err)
        }
    )}
}


export default {
    getPost
}
