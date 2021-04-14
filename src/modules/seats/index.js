import { createAsyncThunk } from "common/utils/asyncUtils";
import * as seatsApi from "api/seats";

const GET_SEAT_LIST = "seats/GET_SEAT_LIST";
const GET_SEAT_LIST_SUCCESS = "seats/GET_SEAT_LIST_SUCCESS";
export const GET_SEAT_LIST_FAILED = "seats/GET_SEAT_LIST_FAILED";

export const getSeatListThunk = createAsyncThunk(
  GET_SEAT_LIST,
  seatsApi.getSeatList
);

const initialState = {
  currentRoomId: null,
  byId: {},
  allIds: [],
};

function handleSuccess(state, action) {
  switch (action.type) {
    case GET_SEAT_LIST_SUCCESS:
      const { roomId, seats } = action.payload;

      return {
        ...state,
        currentRoomId: roomId,
        byId: {
          ...seats.reduce((obj, seat) => {
            obj[seat.id] = seat;
            return obj;
          }, {}),
        },
        allIds: [...seats.map((seat) => seat.id)],
      };
  }
}

export default function seatsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEAT_LIST_SUCCESS:
      return handleSuccess(state, action);
    default:
      return state;
  }
}
