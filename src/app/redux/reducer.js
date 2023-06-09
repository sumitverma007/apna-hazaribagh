import * as actions from './actionTypes'

const userDetails = {
    isLoggedIn: true
}

export const userDetailsReducers = (state = userDetails , action) => {
    switch (action.type){
        case actions.LOGIN_STATUS : 
        return {
            ...state,
            ...action.payload
        };
        default :
            return state ;

    }
}