import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import NavigationBar from './components/NavigationBar';
import MainWeatherCard from './components/MainWeatherCard/MainWeatherCard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

function App() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <MainWeatherCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          Card 2
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
