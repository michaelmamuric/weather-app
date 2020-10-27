import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ErrorDialog from '../ErrorDialog/ErrorDialog';
import Spinner from '../Spinner/Spinner';

import MainWeatherContent from './MainWeatherContent/MainWeatherContent';
import classes from './MainWeatherCard.module.css';

const MainWeatherCard = (props) => {

    // Destructure object for easier referencing
    const { weatherData, error, isLoading } = props;
    
    // Set initial card content
    let cardContent = (
        <MainWeatherContent
            icon="-"
            cityName="-"
            location="-"
            weatherDescriptions="-"
            temperature="-"
            feelsLike="-"
            dateTime="-"
            humidity="-"
            windSpeed="-"
            precipitation="-"
        />
    );

    // Set Error Dialog
    let errorDialog = null;

    // Display Error Dialog if error has been found
    if(error !== null) {
        errorDialog = <ErrorDialog />;
    }
    else if(weatherData !== null) {
        if (isLoading) {
            cardContent = <Spinner />;
        }
        else {
            cardContent = (
                <MainWeatherContent 
                    icon={weatherData.current.condition.icon}
                    cityName={weatherData.location.name}
                    location={
                        weatherData.location.region !== "" ?
                        weatherData.location.region + ', ' + weatherData.location.country :
                        weatherData.location.country
                    }
                    weatherDescriptions={weatherData.current.condition.text}
                    temperature={weatherData.current.temp_c + ' C'}
                    feelsLike={weatherData.current.feelslike_c + ' C'}
                    dateTime={weatherData.location.localtime}
                    humidity={weatherData.current.humidity + '%'}
                    windSpeed={weatherData.current.wind_kph + ' km/hr'}
                    precipitation={weatherData.current.precip_mm + ' mm'}            
                />
            );
        }
    }

    return (
        <Card className={classes.MainWeatherCard}>
          <CardContent>
            {errorDialog}
            {cardContent}
          </CardContent>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData,
        error: state.error,
        isLoading: state.isLoading
    }
};

export default connect(mapStateToProps, null)(MainWeatherCard);