import axios from 'axios';

export const fetchCourses = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_COURSES_REQUEST' });
        axios.get('http://localhost:5000/courses')
            .then(response => {
                dispatch({ type: 'FETCH_COURSES_SUCCESS', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_COURSES_FAILURE', error });
            });
    };
};
