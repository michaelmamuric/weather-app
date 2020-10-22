import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './SearchBar.css';

const SearchBar = (props) => {

    const [cityName, setCityName] = useState('');

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onUpdateCityName(cityName);
    }

    return (
        <Card className="searchBar">
            <form onSubmit={submitFormHandler}>
                <TextField
                    size="small"
                    label="City"
                    variant="outlined"
                    value={cityName}
                    onChange={(event) => setCityName(event.target.value)} 
                />
                &nbsp;
                <Button
                    variant="contained"
                    onClick={submitFormHandler}
                    size="medium"
                >
                    Search
                </Button>
            </form>
        </Card>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateCityName: (cityName) => dispatch(actions.updateCity(cityName))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);