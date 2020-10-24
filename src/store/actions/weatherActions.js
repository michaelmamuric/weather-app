import * as actionTypes from './actionTypes';
import axios from 'axios';
import { apiKey } from '../../secrets/secrets';

export const parseWeatherData = (weatherData) => {
    return {
        type: actionTypes.PARSE_WEATHER_DATA,
        weatherData
    }
}

export const displayError = (error) => {
    return {
        type: actionTypes.DISPLAY_ERROR,
        error
    }
}

export const fetchWeatherData = (cityName) => {
    return async(dispatch) => {
        try { 
            // Fetch WeatherStack API           
            const response = await axios.post(
                `http://api.weatherstack.com/current?accss_key=${apiKey}&query=${cityName}`
            );

            // Error is encountered, e.g. malformed URL request, exceeded number of API calls, etc.
            if(response.data.hasOwnProperty('error'))
                dispatch(displayError(response.data.error.info));
            else
                dispatch(parseWeatherData(response.data));
        } catch(error) {
            // Other errors that may be encountered
            dispatch(displayError(error));
        }
    }
}

