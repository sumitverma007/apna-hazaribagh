import * as actions from './actionTypes'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const token = cookies.get('apn_hzb')


export const validateToken = (callbackFn) => {
    let config = {
        "headers" : {
            "Authorization" : "Bearer " + token,
        }
    }
    let url = '/validate-token-url'
    return (dispatch) => {
        axios.get(url , config)
        .then(resp => {
            if(resp && resp.data && resp.data.data){
                dispatch({
                    type : actions.LOGIN_STATUS,
                    payload : {
                        isLoggedIn: true,
                        ...resp.data.data
                    }
                })
            }
            callbackFn && callbackFn(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}