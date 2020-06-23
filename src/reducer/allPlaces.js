import * as types from '../constants/allPlaces';

const initialState = {
    loading: false,
    places: '',
    err: ''
}

const allPlacesReducers = (state=initialState, action)=>{
    // console.log('====================================');
    // console.log("reduces", action);
    // console.log('====================================');

        switch(action.type){
            case types.ALL_PLACES_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case types.ALL_PLACES_SUCCESS:
                return {
                    loading: false,
                    places: action.payload,
                    err:""
                }
            case types.ALL_PLACES_FAILURE: 
                return {
                    loading: false,
                    places: [],
                    err: action.payload
                }
            default: 
                return state;
        }
}

export default allPlacesReducers;