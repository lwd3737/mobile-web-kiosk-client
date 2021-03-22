import { createAsyncThunk } from 'common/utils/asyncUtils';
import * as roomsApi from 'api/rooms';

const GET_ROOM_LIST = 'rooms/GET_ROOM_LIST';
const GET_ROOM_LIST_SUCCESS = 'rooms/GET_ROOM_LIST_SUCCESS';
export const GET_ROOM_LIST_FAILED = 'rooms/GET_ROOM_LIST_FAILED';

export const getRoomListThunk = createAsyncThunk(GET_ROOM_LIST, roomsApi.getRoomList);

const initialState = {
    byId: {},
    allIds: [],
};

function handleSuccess(state, action){
    switch(action.type){
        case GET_ROOM_LIST_SUCCESS:
            const rooms = action.payload;

            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...rooms.reduce((obj, room) => {
                        obj[room.id] = room;
                        return obj;
                    }, {})
                },
                allIds: [...rooms.map(room => room.id)]
            }
    }
}

export default function roomsReducer(state = initialState, action){
    switch(action.type){
        case GET_ROOM_LIST_SUCCESS:
            return handleSuccess(state, action);
        default:
            return state;
    }
}