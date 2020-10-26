import React from 'react';
import Grid from '@material-ui/core/Grid';
import { WiCelsius, WiThermometer, WiHumidity, WiStrongWind, WiTime10, WiRainMix } from 'weather-icons-react';
import Typography from '@material-ui/core/Typography';

const MainWeatherContent = (props) => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            { props.icon !== '-' ? <img src={props.icon} alt='Icon' /> : null }
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h5">{props.cityName}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">{props.location}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography>{props.weatherDescriptions}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiCelsius size={50} />
            <Typography>Current Temperature:<br />{props.temperature}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiThermometer size={50} />
            <Typography>Feels Like:<br />{props.feelsLike}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiTime10 size={50} />
            <Typography>Current Date and Time:<br />{props.dateTime}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiHumidity size={50} />
            <Typography>Humidity:<br />{props.humidity}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiStrongWind size={50} />
            <Typography>Wind Speed:<br />{props.windSpeed}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
            <WiRainMix size={50} />
            <Typography>Precipitation:<br />{props.precipitation}</Typography>
        </Grid>
    </Grid> 
);

export default MainWeatherContent;