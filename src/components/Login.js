import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
const Login = () => {

  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { signIn,providerLogin} = useContext(AuthContext);
const handelRegister = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
       
    })
    .catch(error => {
        console.error(error)
        setError(error.message);
    })
   
}

const handelGoogle = ()=>{
  providerLogin()
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
   
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    setError('')
  });
}

const handleAccepted = event => {
  setAccepted(event.target.checked)
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
        <span className='text-danger'> {error} </span>
        <span> if you have no account please <Link to='/register'> register </Link> </span>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label="Check me out" />
        </Form.Group>
        <Button  className="w-100" variant="primary" type="submit" disabled={!accepted}>
         Login
        </Button>
        <Button onClick={handelGoogle} className="w-100 mt-3" variant="primary" type="submit">
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