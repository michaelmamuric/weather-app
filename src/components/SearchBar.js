import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const SearchBar = (props) => {

    const [cityName, setCityName] = useState('');

    const submitFormHandler = (event) => {
        event.preventDefault();
        alert(cityName);
    }

    return (
        <form onSubmit={submitFormHandler}>
            <TextField 
                label="City"
                variant="outlined"
                value={cityName}
                onChange={(event) => setCityName(event.target.value)} 
            />
            <Button
                variant="contained"
                color="primary"
            >
                Search
            </Button>
        </form>
    );
}

export default SearchBar;