
import {TOGGLE_TRUE,TOGGLE_FALSE} from "../constants/contactEditActionTypes";


 const initileState={
     edit:false,
 }



 export const contactEditReducer=(state=initileState,{type})=>{
     switch (type) {
         case TOGGLE_TRUE: return{...state,edit:true}
         case TOGGLE_FALSE: return{...state,edit:false}   
         default: return state;
            
     }
 }