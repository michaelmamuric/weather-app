import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cityName: null,
    isMetric: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_CITY:
            return {
                ...state,
                cityName: action.cityName
            };
        case actionTypes.SWITCH_UNITS:
            return {
                ...state,
                isMetric: !state.isMetric
            }
    }

    return state;
}

export default reducer;
