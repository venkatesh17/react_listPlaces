import * as types from '../constants/allPlaces'
import axios from "axios";

export const allPlacesRequest =()=>{
    return {
        type: types.ALL_PLACES_REQUEST
    }
}

export const allPlacesSuccess = (places)=>{
    return {
        type: types.ALL_PLACES_SUCCESS,
        payload: places
    }
}

export const allPlacesError = err =>{
    return{
        type: types.ALL_PLACES_FAILURE,
        payload: err
    }
}

export const allPlaces =()=>{
    return async function(dispatch){
        dispatch(allPlacesRequest())   
       
        axios('http://roadtrippers.herokuapp.com/api/v1/places/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          }).then(response=>{
                    const places = response.data.places;
                    dispatch(allPlacesSuccess(places))
            }).catch(error=>{
                console.log("..........err.................", error.message)
                dispatch(allPlacesError(error.message))
            })
    }
}

