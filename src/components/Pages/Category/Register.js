import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { AuthContext } from "../../Context/AuthProvider";
const Register = () => {
  const [error, setError]= useState('');
  const {providerLogin,createUser,signIn,updateUserProfile}= useContext(AuthContext)
const handelRegister = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email,password);
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
       
       
    })
    .catch(e => {
        console.error(e);
        setError(e.message);
    });

}
const handleUpdateUserProfile = (name, photoURL) => {
  const profile = {
      displayName: name,
      photoURL: photoURL
  }

  updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
}

  return (
    <div className=" w-50 h-100 m-auto">
      <Form onSubmit={handelRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

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
      <span className="text-danger"> {error} </span>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
         Register
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

export default Register;
