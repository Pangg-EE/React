import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../base.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 동작 방지
    }
    return(
    <div style={{textAlign: "center", maxWidth: "500px", margin: "4rem auto"}}>
    <div>
        <h2>Login</h2>
    </div>
    <div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit" className="btn btn-dark rounded-pill col-6 mt-3 ">
    제출
  </Button>
</Form>
        {/* <CSRFToken/> */}
        
    </div>
    </div>
    );
};

export default Login
