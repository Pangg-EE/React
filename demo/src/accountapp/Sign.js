import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../base.css';

const Sign= () =>(
    <div style={{textAlign: "center", maxWidth: "500px", margin: "4rem auto"}}>
    <div className="mb-4">
      <h4>Sign Up</h4>
    </div>
    <Form>
  <Form.Group className="form-group" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
    <Form.Text className="text-muted">
     Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
    <ul><li>Your password can’t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can’t be a commonly used password.</li><li>Your password can’t be entirely numeric.</li></ul>
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
    <Form.Label>Password confirmation</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
     Enter the same password as before, for verification.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" className="btn btn-dark rounded-pill col-6 mt-3 ">
    제출
  </Button>
</Form>
  </div>
);

export default Sign