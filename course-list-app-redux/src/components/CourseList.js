import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import EnquiryForm from './EnquiryForm';

const CourseList = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.courses);
    const loading = useSelector(state => state.courses.loading);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const handleEnquire = (course) => {
        setSelectedCourse(course);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
