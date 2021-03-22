import { createAsyncThunk } from 'common/utils/asyncUtils';
import * as partnerApi from 'api/partner';

//action type
export const GET_PARTNER_DATA = 'partner/GET_PARTNER_DATA';
export const GET_PARTNER_DATA_SUCCESS = 'partner/GET_PARTNER_DATA_SUCCESS';
export const GET_PARTNER_DATA_FAILED = 'partner/GET_PARTNER_DATA_FAILED';


//action creator
// export const getPartnerDataSuccess = () => ({
//     type: GET_PARTNER_DATA_SUCCESS,
// });

// export const getPartnerDataFailed = (error) => ({
//     type: GET_PARTNER_DATA_FAILED,
//     error
// });

//redux thunk
export const getPartnerDataThunk = createAsyncThunk(
    GET_PARTNER_DATA, 
    partnerApi.getPartnerData
);

const initialState = {
    id: null,
    serviceName: null,
    homeThumbnails: [],
};


//case reducer
function handlePartnerData(state, action){
    switch(action.type){
        case GET_PARTNER_DATA_SUCCESS:
            const { id, serviceName, homeThumbnails } = action.payload;

            return {
                ...state,
                id,
                serviceName,
                homeThumbnails
            };
        case GET_PARTNER_DATA_FAILED:
            return {
                ...initialState
            }
    }
}

export default function partnerReducer(state = initialState, action){
    switch(action.type){
        case GET_PARTNER_DATA_SUCCESS:
        case GET_PARTNER_DATA_FAILED:
            return handlePartnerData(state, action);
        default:
            return state;
    }
}