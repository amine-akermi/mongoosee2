import React, { useEffect } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import AddUser from "./components/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./JS/actions/contactActions";
import { toggleFalse } from "./JS/actions/contactEditActions";
function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );
  
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div className="App">
      <div>
        <Link to="/Contact_list">
          <Button
            variant="outline-primary button"
            onClick={() => dispatch(getContacts())}
          >
            Contact List
          </Button>
        </Link>
        <Link to="/Add_Contact">
          <Button
            variant="primary button"
            onClick={() => dispatch(toggleFalse())}
          >
            Add Contact
          </Button>
        </Link>
      </div>

      <div>
        <Route
          path="/Contact_list"
          render={() => (
            <div className="contact-list">
              {loadContacts ? (
                <div
                  className="spinner-border text-primary"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                contacts.map((el) => <UserCard key={el._id} contact={el} />)
              )}
            </div>
          )}
        />
        <Route path="/(Add_Contact|Edit_Contact)/" render={() => <AddUser />} />
      </div>
    </div>
  );
}

export default App;
