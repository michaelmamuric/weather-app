import * as actionTypes from './actionTypes';

export const updateCity = (cityName) => {
    return {
        type: actionTypes.UPDATE_CITY,
        cityName
    };
}

export const switchUnits = () => {
    return {
        type: actionTypes.SWITCH_UNITS
    };
}