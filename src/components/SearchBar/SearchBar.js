import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './SearchBar.css';

const SearchBar = (props) => {

    const [cityName, setCityName] = useState('');

    const submitFormHandler = (event) => {
        event.preventDefault();

        // Only submit form if input is filled
        if(cityName.trim().length > 0) {
            props.onFormSubmit(cityName);
        }
    }

    return (
        <Card className="searchBar">
            <CardContent>
                <form onSubmit={submitFormHandler}>
                    <TextField
                        size="small"
                        label="City"
                        variant="outlined"
                        value={cityName}
                        type="search"
                        onChange={(event) => setCityName(event.target.value)} 
                    />
                    &nbsp;
                    <Button
                        variant="contained"
                        onClick={submitFormHandler}
                        size="medium"
                    >
                        Go
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFormSubmit: (cityName) => dispatch(actions.fetchWeatherData(cityName))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);