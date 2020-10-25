import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ErrorDialog from '../ErrorDialog/ErrorDialog';

import MainWeatherContent from './MainWeatherContent/MainWeatherContent';
import classes from './MainWeatherCard.module.css';

const MainWeatherCard = (props) => {

    // Destructure object for easier referencing
    const { weatherData, error } = props;
    
    // Set initial card content
    let cardContent = (
        <MainWeatherContent
            icon={[]}
            cityName="-"
            location="-"
            weatherDescriptions={['-']}
            temperature="-"
            feelsLike="-"
            dateTime="-"
            humidity="-"
            windSpeed="-"
            precipitation="-"
        />
    );

    // Display Error Dialog if error has been found
    if(error !== null) {
        cardContent = <ErrorDialog errorMessage={error} />;
    }
    else if(weatherData !== null) {
        cardContent = (
            <MainWeatherContent 
                icon={weatherData.current.weather_icons}
                cityName={weatherData.location.name}
                location={
                    weatherData.location.region !== "" ?
                    weatherData.location.region + ', ' + weatherData.location.country :
                    weatherData.location.country
                }
                weatherDescriptions={weatherData.current.weather_descriptions}
                temperature={weatherData.current.temperature + ' C'}
                feelsLike={weatherData.current.feelslike + ' C'}
                dateTime={weatherData.location.localtime}
                humidity={weatherData.current.humidity + '%'}
                windSpeed={weatherData.current.wind_speed + ' km/hr'}
                precipitation={weatherData.current.precip + ' mm'}            
            />
        );
    }

    return (
        <Card className={classes.MainWeatherCard}>
          <CardContent>
            {cardContent}
          </CardContent>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData,
        error: state.error
    }
};

export default connect(mapStateToProps, null)(MainWeatherCard);