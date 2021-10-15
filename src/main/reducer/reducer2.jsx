import {Get_Totel , Get_Current } from '../action-types';

const initialState = {
    totel:21933,
    currentPage:1,
   
}
export default function(state = initialState, action){

    switch(action.type){

        // case GET_USERS:
        // return {
        //     ...state,
        //     users:action.payload,
        //     loading:false

        // }
        default: return state
    }

}