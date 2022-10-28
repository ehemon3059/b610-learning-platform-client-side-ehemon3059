import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import './SignUp.css'

const SignUp = () => {

    const [error , setError] = useState(null);

    const {createUser , updateUsrProfile , googleProviderLogin , githubProviderLogin} = useContext(AuthContext);




    
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();

    const handelGoogleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }


    const handelGithubsignin = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }

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
                form.reset();
                handelUserUpdateProfile(fullName,photoURL);
                
                navigate('/');
                window.location.reload();
            })
            .catch(error => {console.error(error)
            const errorMessage = error.message;
                setError(errorMessage)
            })


    }

    const handelUserUpdateProfile = (fullName,photoURL ) => {

        const profile = {
            displayName : fullName,
            photoURL: photoURL
        }

        updateUsrProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
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
                            <Form.Control type="text" name="fullName" placeholder="Enter name" required/>
                            
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" />
                            
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required /> 
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" name="confirmPsw" placeholder="Password"  required />
                        </Form.Group>


                       
                        <div className="link mt-3 text-muted">
                           <p>if you already have an account<Link to='/login'> Login</Link></p> 
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>


                        <Form.Text className="ms-2 text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </div>
                <div className="d-flex  flex-column">

                <Button  className='mb-5 mt-5' onClick={handelGoogleSignIn} variant="outline-primary"><FaGoogle /> &nbsp;&nbsp;  Login With Google</Button>
                <Button className='mb-5 mt-2 ' onClick={handelGithubsignin} variant="outline-dark"><FaGithub />  &nbsp;&nbsp; Login With GitHub</Button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;