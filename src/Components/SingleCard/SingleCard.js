import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';

const SingleCard = () => {
  

    const detlis = useLoaderData();
    console.log(detlis);

    const handelenroll =() =>{
        toast.success('Successfully enroll !');
    }

    const handelePDF = () => {
        let doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("mypdf.pdf");
            }
        })
    }
    
    return (
        <div><Toaster/>
        <div className='d-flex  justify-content-center mt-5' >
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={detlis.img_URL} />
            <Card.Body>
                <Card.Title>{detlis.course_name}</Card.Title>
                <Card.Text id="content">
                {detlis.details}
                </Card.Text>
                
                        <Button onClick={handelenroll} variant="primary">enroll</Button>
                        
                    
            </Card.Body>
            <Button onClick={handelePDF} variant="primary">Download Coure Details PDF</Button>
        </Card>
        </div>
        </div>
    );
};

export default SingleCard;