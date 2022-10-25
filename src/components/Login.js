import React from 'react';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
const handelRegister = (e)=>{
    e.preventDefault()
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
}

  return (
    <div className=" w-50 h-100 m-auto">
      <Form onSubmit={handelRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
         Login
        </Button>
        <Button className="w-100 mt-3" variant="primary" type="submit">
         <FaGoogle/> Google Login
        </Button>
        <Button className="w-100 mt-3" variant="primary" type="submit">
        <FaGithub className=""/> Git Hub
        </Button>
      </Form>
    </div>
  );
};


export default Login;