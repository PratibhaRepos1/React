import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEnquiries } from '../actions/enquiryActions';

const Enquiries = () => {
    const dispatch = useDispatch();
    const enquiries = useSelector(state => state.enquiries.enquiries);
    const loading = useSelector(state => state.enquiries.loading);

    useEffect(() => {
        dispatch(fetchEnquiries());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

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
