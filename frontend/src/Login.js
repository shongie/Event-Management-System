import React, { useState } from 'react'
// import {Button, Col, Container, Row ,Form} from 'react-bootstrap';
import axios from 'axios';
import {Button, Col, Container, Row ,Form} from 'react-bootstrap';

const config = require('./config.json')

export default function Login() {
    const [identifier, setIdentifier] = useState('');
const [password, setPassword] = useState('');

let login = ()=>{
    console.log('password');
    console.log('identifier');

    axios.post(`${ config.dev_url}/api/auth/local`, {
      identifier: identifier,
      password: password
    })
    .then(response => {

      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch(error => {

      console.log('An error occurred:', error.response);
    });

}


    return (

<Container>
    <Row>
      <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="identifier" value= {identifier} onChange={(e)=>{ setIdentifier(e.target.value) }} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name = "password" value= {password} onChange={(e)=>{ setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={ ()=>{ login() } }>
        Submit
      </Button>
    </Form>
      </Col>
    </Row>
  </Container>


    )
}
