import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CoursesDetails = ({category}) => {

console.log(category);


    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={category.img_URL} />
            <Card.Body>
                <Card.Title>{category.course_name}</Card.Title>
                <Card.Text>
                {category.details}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;