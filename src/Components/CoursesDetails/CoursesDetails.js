import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const CoursesDetails = ({category}) => {

console.log(category);


    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={category.img_URL} />
            <Card.Body>
                <Card.Title>{category.course_name}</Card.Title>
                <Card.Text>

                {
                        category.details.length > 250 ? 
                        <p>{category.details.slice(0,250) + '...' } </p>
                        :
                        <p>{category.details}</p>
                    }
                {/* {category.details} */}
                </Card.Text>
                <Link to={`/courses/${category.id}`}>
                        <Button variant="primary">premium access</Button>
                    </Link>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;