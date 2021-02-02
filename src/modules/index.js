import { combineReducers } from 'redux';

import flagsReducer from './flags';
import partnerReducer from './partner';

const rootReducer = combineReducers({
    flags: flagsReducer,
    partner: partnerReducer
});

export default rootReducer;