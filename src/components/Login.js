
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
const Login = () => {
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { signIn,providerLogin,githubLogin} = useContext(AuthContext);
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
        navigate(from, {replace:true})
        setError('');
      
       
    })
    .catch(error => {
        console.error(error)
        setError(error.message);
        
    })
   
}
const handelGithub=()=>{
  githubLogin()
  .then((result) => {
    const user = result.user;
    console.log(user)
    navigate(from, {replace:true})
    setError('');
  }).catch((error) => {
    
   console.log(error);
   setError(error.message)
  
    
  });
}

const handelGoogle = ()=>{
  providerLogin()
  .then((result) => {
    const user = result.user;
    console.log(user)
    navigate(from, {replace:true})
    setError('');
  }).catch((error) => {
    
   console.log(error);
   setError(error.message)
   
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
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
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
        <Button onClick={handelGithub} className="w-100 mt-3" variant="primary" type="submit">
        <FaGithub className=""/> Git Hub
        </Button>
      </Form>
    </div>
  );
};


export default Login;