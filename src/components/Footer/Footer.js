import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './Footer.module.css';

const Footer = (props) => (
    <Card className={classes.Footer}>
        <CardContent>
            <Typography>
                Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
            </Typography>
        </CardContent>
    </Card>
);

export default Footer;