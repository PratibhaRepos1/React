import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = ({ course }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const enquiry = {
            courseId: course.id,
            name,
            email
        };
        axios.post('http://localhost:5000/enquiries', enquiry)
            .then(response => {
                alert('Enquiry submitted');
                setName('');
                setEmail('');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <h2 className="mb-3">Enquire about {course.name}</h2>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    );
};

export default EnquiryForm;
