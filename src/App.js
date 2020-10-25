import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import NavigationBar from './components/NavigationBar';
import MainWeatherCard from './components/MainWeatherCard/MainWeatherCard';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12}>
        <MainWeatherCard />
      </Grid>
    </Grid>
  );
}

export default App;
