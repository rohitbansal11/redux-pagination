import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {DELETE_CONTACT, GET_USERS ,EDIT_EMPLOYEE} from '../action-types'

const initialState = {
    users:[],



}
    
   

export default function(state = initialState, action){
   
    



    switch(action.type){
       

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
           

        };
        case DELETE_CONTACT:
           return{
               ...state,
            users:action.payload
             
                // const contactFilter = state.map((user, index) =>
                // index === action.payload ? null : user
                //     );
                //  state = contactFilter;
           }

           case EDIT_EMPLOYEE:
            return {
                ...state,
                users: state.users.map(
                    (content, i) => i+1 === action.payload.id ? {...content, name : action.payload.name ,  country : action.payload.country }
                                            : content)
            };
                 


            
           
    
        
      
        default: return state
    }
   

}