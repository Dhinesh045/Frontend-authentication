import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
 const SignUp = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    const{name,value}=e.target
    setformData({...formData,
      [name]:value
    })
  };
const handleSubmit= (e) => {
  e.preventDefault();
  console.log(FormData)

}
  return (
    <Container>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            Name  </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
         
        </Form.Group>
        <Form.Group>
          <Form.Label>
            email  </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
         
        </Form.Group>
        <Form.Group>
          <Form.Label>
            password  </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
         
        </Form.Group>
      </Form>
      <button variant="primary" type="submit">Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </Container>
  );
};
export default SignUp;
