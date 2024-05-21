import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import enquiryReducer from './enquiryReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    enquiries: enquiryReducer
});

export default rootReducer;