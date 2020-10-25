import * as actionTypes from '../actions/actionTypes';

const initialState = {
    weatherData: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PARSE_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.weatherData
            }
        case actionTypes.DISPLAY_ERROR:
            return {
                weatherData: null,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;
