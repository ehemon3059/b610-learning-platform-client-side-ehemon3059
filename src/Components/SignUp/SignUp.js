import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../UserContext/UserContext';
import './SignUp.css'

const SignUp = () => {

    const [error , setError] = useState(null);

    const {createUser} = useContext(AuthContext)

    const handelSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName =form.fullName.value; 
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPsw = form.confirmPsw.value;

        console.log(fullName,photoURL,email,password,confirmPsw);

        if(password.length < 6 ){
            setError("Password should be 6 character or more");
            return ;
        }
        if(password !== confirmPsw){
            setError("Confirm Password did Not Match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error))


    }


    return (
        <div>
            <div className="container mt-5 signup" >
                <div className="title text-center ">
                    <h2>Signup</h2>
                </div>
                <div className="form">
                <Form onSubmit={handelSignUp}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="Enter name" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" /> 
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" name="confirmPsw" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Text className="ms-2 text-danger">
                        {error}
                    </Form.Text>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;