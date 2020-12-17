
import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACT,
  EDIT_CONTACT,
} from "../constants/contactActionTypes";
import axios from "axios";



export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (e) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: e.message });
  }
};



export const deleteContact = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`/api/contact/${id}`);
    dispatch(getContacts());
  } catch (e) {
    console.log(e.message);
  }
};



export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data.response });
  } catch (e) {
    console.log(e.message);
  }
};



export const postContact = ( user) => async (dispatch) => {
  try {
    let result = await axios.post('/api/contact/', user);
    dispatch(getContacts());
  } catch (e) {
    console.log(e.message);
  }
};


 export const editContact =(id,user)=>async(dispatch)=>{
   try {
     let result= await axios.put(`/api/contact/${id}`,user);
     dispatch({type:EDIT_CONTACT,payload:result.data.message});
     dispatch(getContacts());
   
   } catch (e) {
    dispatch({type:EDIT_CONTACT,payload:e});
   }
 }