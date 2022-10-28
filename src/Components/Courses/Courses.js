import React, { useEffect, useState } from 'react';

import CoursesDetails from '../CoursesDetails/CoursesDetails';

import './Courses.css'

const Courses = () => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setcategories(data))


    },[])
    return (
        <div>
            <div className="course-container">
                <div className="courses-list shadow">
                    <h2>All Courses {categories.length}</h2>
                    {
                        categories.map(category => <p key={category.id}>{category.course_name}</p>)
                    }
                </div>

                <div className="course-details">
                    {
                        categories.map(category => <CoursesDetails key={category.id} category={category}></CoursesDetails> )
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Courses;