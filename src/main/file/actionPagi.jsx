import React ,{useEffect}from 'react'
import {GET_USERS, USERS_ERROR , DELETE_CONTACT, EDIT_EMPLOYEE} from '../action-types';
import axios from 'axios';


export const getUsers = (aa) => async dispatch => {
    
    try{
        
        const res = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${aa}&size=20`)
       
        let my =res.data.data;
        let mys=res.data.totalPassengers;
       
        let myres=my.map((q)=>{
           
            
            return q.airline[0]
        })
        console.log(myres);
        
        dispatch( {
            type: GET_USERS,
            payload: myres,
            
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

 export const deleteContact= (w ) => {
    return{ 
        type: DELETE_CONTACT,
         payload: w 
    }


  }
  export function editEmployee(data) {
    return dispatch => {
        return dispatch({
            type: EDIT_EMPLOYEE,
            payload: data
        });
    }
};