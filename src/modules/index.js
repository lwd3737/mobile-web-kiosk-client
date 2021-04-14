import { combineReducers } from 'redux';

import flagsReducer from './flags';
import partnerReducer from './partner';
import roomsReducer from './rooms';
import seatsReducer from './seats';

const rootReducer = combineReducers({
    flags: flagsReducer,
    partner: partnerReducer,
    rooms: roomsReducer,
    seats: seatsReducer
});

export default rootReducer;