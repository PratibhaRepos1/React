const initialState = {
    enquiries: [],
    loading: false,
    error: null
};

const enquiryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_ENQUIRIES_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_ENQUIRIES_SUCCESS':
            return { ...state, loading: false, enquiries: action.payload };
        case 'FETCH_ENQUIRIES_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'ADD_ENQUIRY_SUCCESS':
            return { ...state, enquiries: [...state.enquiries, action.payload] };
        default:
            return state;
    }
};

export default enquiryReducer;
