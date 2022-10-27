import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../UserContext/UserContext';
import './Login.css'

const Login = () => {

    const [error, setError] = useState(null)

    const {signInUser} = useContext(AuthContext)
 
    const handelLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => {
            console.error(error);
            const errorMessage = error.message;
            setError(errorMessage)
          }
        
        )
    }
    return (
        <div>
            <div className="container mt-5 login" >
                <div className="title text-center ">
                    <h2>Login</h2>
                </div>
                <div className="form">
                <Form onSubmit={handelLogin}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger ms-2">
                        {error}
                    </Form.Text>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;