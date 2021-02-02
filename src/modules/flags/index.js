//action type
const APP_LOADING = 'flags/APP_LOADING';
const APP_LOADED = 'flags/APP_LOADED';
const LOADING = 'flags/LOADING';

//action creator
export const appLoaded = () => ({
    type: APP_LOADED
});

export const loading = (actionType) => ({
    type: LOADING,
    actionType
});


//redux thunk
export const appLoadingThunk = () => (dispatch, getState) => {
    dispatch({ type: APP_LOADING });
}

//reducer utils
const isSuccessType = (type) => {
    return type.endsWith('SUCCESS');
};

const isFailedType = (type) => {
    return type.endsWith('FAILED');
};


const initialState = {
    appLoaded: false,
    loading: {
        actions: []
    },
    error: {
        actions: []  // actions: { type1: { message }, ... }
    }
}

//case reducer
function handleLoading(state, action){
    const actions = state.loading.actions; 

    return {
        ...state,
        loading: {
            actions: !actions.includes(action.actionType) 
                ? actions.concat(action.actionType)
                : actions
        }
    }
}

function handleAppLoaded(state){
    return {
        ...state,
        appLoaded: false
    };
}

function handleSuccess(state, action){
    return {
        ...state,
        loading: {
            ...state.loading,
            actions: state.loading.actions.filter(_action => _action !== action.type)
        }
    }
}

function handleFailed(state, action){
    return {
        ...state,
        error: {

        }
    }
}


//slice reducer
export default function flagsReducer(state = initialState, action){
    if(action.type === LOADING){
        return handleLoading(state, action);
    } else if(action.type === APP_LOADED) {
        return handleAppLoaded(state);
    } else if(isSuccessType(action.type)){
        return handleSuccess(state, action);
    } else if(isFailedType(action.type)){
        return handleFailed(state, action);
    } else {
        return state;
    }
}
