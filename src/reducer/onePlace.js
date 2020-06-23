import * as types from '../constants/onePlace';

const initialState = {
    loading: false,
    place:[],
    err: ''
}

const onePlaceReducers = (state=initialState, action)=>{
        switch(action.type){
            case types.ONE_PLACES_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case types.ONE_PLACES_SUCCESS:
                return {
                    loading: false,
                    place: action.payload,
                    err:""
                }
            case types.ONE_PLACES_FAILURE: 
                return {
                    loading: false,
                    place: [],
                    err: action.payload
                }
            default: 
                return state;
        }
}

export default onePlaceReducers;