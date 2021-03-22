import { combineReducers } from 'redux';

import flagsReducer from './flags';
import partnerReducer from './partner';
import roomsReducer from './rooms';

const rootReducer = combineReducers({
    flags: flagsReducer,
    partner: partnerReducer,
    rooms: roomsReducer
});

export default rootReducer;