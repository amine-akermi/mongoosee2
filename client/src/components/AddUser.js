import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editContact, postContact } from "../JS/actions/contactActions";
const AddUser = () => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const userReducer = useSelector((state) => state.contactReducer.user);
  const editUser = useSelector((state) => state.contactEditReducer.edit);
  

  useEffect(() => {
    editUser
      ? setNewContact(userReducer)
      : setNewContact({ name: "", email: "", phone: "" });
  }, [editUser, userReducer]);
  const handleChange = (e) => {
    e.preventDefault();
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const handleContact = () => {
    if (!editUser) {
      dispatch(postContact(newContact));
    } else {
      dispatch(editContact(userReducer._id, newContact));
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {editUser ? "Edit Contact" : "Add Contact"}
        </Card.Header>

        <Card.Body>
          <Form>
            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newContact.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newContact.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>Phone :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={newContact.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <div className="buttons">
          <Link to="/Contact_list">
            <Button
              variant="outline-primary edit-button"
              type="submit"
              onClick={() => handleContact()}
            >
              {editUser ? "Submit" : "Add"}
            </Button>
          </Link>
          <Link to="/Contact_list">
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AddUser;
