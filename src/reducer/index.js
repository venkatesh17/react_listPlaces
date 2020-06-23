import {combineReducers} from 'redux'

import allPlacesReducers from './allPlaces';
import onePlaceReducers from './onePlace'

export default combineReducers({
    allPlacesReducers, onePlaceReducers
})

