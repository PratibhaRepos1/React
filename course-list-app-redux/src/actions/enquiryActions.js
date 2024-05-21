import axios from 'axios';

export const fetchEnquiries = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_ENQUIRIES_REQUEST' });
        axios.get('http://localhost:5000/enquiries')
            .then(response => {
                dispatch({ type: 'FETCH_ENQUIRIES_SUCCESS', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ENQUIRIES_FAILURE', error });
            });
    };
};

export const addEnquiry = (enquiry) => {
    return dispatch => {
        axios.post('http://localhost:5000/enquiries', enquiry)
            .then(response => {
                dispatch({ type: 'ADD_ENQUIRY_SUCCESS', payload: response.data });
            })
            .catch(error => {
                // handle error if needed
            });
    };
};
