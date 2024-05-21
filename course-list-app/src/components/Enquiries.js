import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/enquiries')
            .then(response => setEnquiries(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
        <h1 className="mb-4">Enquiries</h1>
        <ul className="list-group">
            {enquiries.map(enquiry => (
                <li key={enquiry.id} className="list-group-item">
                    Course ID: {enquiry.courseId} - Name: {enquiry.name} - Email: {enquiry.email}
                </li>
            ))}
        </ul>
    </div>
);
};

export default Enquiries;
