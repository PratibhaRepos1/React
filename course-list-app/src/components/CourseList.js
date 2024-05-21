import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EnquiryForm from './EnquiryForm';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleEnquire = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div>
        <h1 className="mb-4">Courses</h1>
        <ul className="list-group">
            {courses.map(course => (
                <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {course.name}
                    <button className="btn btn-primary" onClick={() => handleEnquire(course)}>Enquire</button>
                </li>
            ))}
        </ul>
        {selectedCourse && <EnquiryForm course={selectedCourse} />}
    </div>
);
};

export default CourseList;
