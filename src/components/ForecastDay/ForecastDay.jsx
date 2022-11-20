import React from 'react';
import './ForecastDay.css';

const ForecastDay = (props) => {
    function getDay(date) {
        const dayOfTheWeek = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        date = new Date(date * 1000);
        const day = date.getDay();
        return dayOfTheWeek[ day ];
    }
    return (
        <div className="col-12 col-sm py-2">
            <div className="card next-day">
                <div className="card-body">
                    <h3>{ getDay(props.data.time) }</h3>
                    <img
                        src={ `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${ props.data.condition.icon }.png` }
                        alt={ props.data.condition.description }
                        className="icon"
                    />
                    <p>
                        <span id="lower-temp">{ Math.round(props.data.temperature.minimum) } { props.unit === 'metric' ? '°C' : '°F' }</span>|{ " " }
                        <span id="higher-temp">{ Math.round(props.data.temperature.maximum) } { props.unit === 'metric' ? '°C' : '°F' }</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForecastDay;