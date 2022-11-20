import React, { useEffect, useState } from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import './Forecast.css';

const Forecast = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ forecastDetails, setForecastDetails ] = useState(null);
    function getForecastDetails(response) {
        setIsLoading(false);
        setForecastDetails(response.data.daily);
    }
    function getForecast() {
        const apiKey = '965oa82484eb1f90f31f6t42c017e0f4';
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${ props.city }&key=${ apiKey }&units=${ props.unit }`;
        axios.get(apiUrl).then(getForecastDetails);
    }
    useEffect(() => {
        setIsLoading(true);
    }, [ props.city, props.unit ]);
    if (isLoading) {
        getForecast();
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.5"
        width="96"
        visible={true}
      />;
    } else {
        return (
            <div className="weather-next">
                <h3>5-day Weather Forecast</h3>
                <div className="row d-flex justify-content-between">
                    {
                        forecastDetails.map((forecast, index) => {
                            if (index < 5) {
                                return <ForecastDay data={ forecast } unit={ props.unit } key={ index } />;
                            } else {
                                return null;
                            };
                        })
                    }


                </div>
            </div>
        );
    }
};

export default Forecast;