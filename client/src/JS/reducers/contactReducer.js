
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,GET_CONTACT,EDIT_CONTACT
} from "../constants/contactActionTypes";


const initialeState = {
  contacts: [],
  loadContacts: false,
  errors: null,
  user:{},
  isUpdated:"",
};



export const contactReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, errors: payload, loadContacts: false };
      case GET_CONTACT:
        return { ...state, user:payload };
        case EDIT_CONTACT:
          return { ...state, isUpdated:payload };
        default:
      return state;
  }
};
