import * as actionTypes from '../actions/actionTypes';

const initialState = {
    weatherData: null,
    error: null,
    isLoading: false
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
                ...state,
                error: action.error
            }
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null,
                isLoading: false
            }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export default reducer;
