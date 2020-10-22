import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

const MainWeatherCard = (props) => {
    return (
        <Card>
            Main Weather Card
            City Name: {props.cityName}
        </Card>
    );
}

// Maps to reducers/weatherReducer.js
const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        isMetric: state.isMetric
    }
};


export default connect(mapStateToProps, null)(MainWeatherCard);