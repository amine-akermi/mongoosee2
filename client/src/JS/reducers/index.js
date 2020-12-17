
import {combineReducers} from "redux"
import {contactReducer} from "./contactReducer"
import{contactEditReducer}from "./contactEditReducer"



export const rootReducer=combineReducers({contactReducer,contactEditReducer});
