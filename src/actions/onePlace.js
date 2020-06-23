import * as types from '../constants/onePlace'
import axios from "axios";

export const onePlacesRequest =()=>{
    return {
        type: types.ONE_PLACES_REQUEST
    }
}

export const onePlacesSuccess = (place)=>{
    return {
        type: types.ONE_PLACES_SUCCESS,
        payload: place
    }
}

export const onePlacesError = err =>{
    return{
        type: types.ONE_PLACES_FAILURE,
        payload: err
    }
}

export const onePlace =(id)=>{
    return async function(dispatch){
        dispatch(onePlacesRequest())   

        axios(`http://roadtrippers.herokuapp.com/api/v1/place/${id}/`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          }).then(response=>{
                    const place = response.data
                    
                    dispatch(onePlacesSuccess(place))
            }).catch(error=>{
                console.log("..........err.................", error.message)
                dispatch(onePlacesError(error.message))
            })
    }
}

