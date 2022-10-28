import React from 'react';
import { Button,  } from 'react-bootstrap';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className="title mt-5 text-center">
                <h3 className='text-success'>Pro Programmer</h3>
                <p className='details-text'>Great programmers are rare. Their productivity is 3 times that of an average developer and 10 times that of a bad developer*. The top 1% of developers in the world don’t just write solid code but have important intangible traits. After working with thousands of developers, we have been able to identify 7 qualities that set a great programmer apart from the crowd.</p>
            </div>
            <div className="buttons text-center">
                <Button variant="outline-primary" >SignUp</Button>
                <Button variant="outline-success" className='ms-3'>Login</Button>
            </div>
            
        </div>
    );
};

export default Home;