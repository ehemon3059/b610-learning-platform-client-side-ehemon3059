import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSideShared = () => {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h2>All courses {courses.length}</h2>
            {
                courses.map(course => <p key={course.id}>
                     <Link to={`/courseCategory/${course.id}`}>{course.course_name}</Link> 
                     </p>)
            }
        </div>
    );
};

export default LeftSideShared;