import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast, { Toaster } from 'react-hot-toast';

const SingleCard = () => {
  

    const detlis = useLoaderData();
    console.log(detlis);

    const handelenroll =() =>{
        toast.success('Successfully enroll !');
    }
    
    return (
        <div><Toaster/>
        <div className='d-flex  justify-content-center mt-5' >
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={detlis.img_URL} />
            <Card.Body>
                <Card.Title>{detlis.course_name}</Card.Title>
                <Card.Text>
                {detlis.details}
                </Card.Text>
                
                        <Button onClick={handelenroll} variant="primary">enroll</Button>
                    
            </Card.Body>
        </Card>
        </div>
        </div>
    );
};

export default SingleCard;