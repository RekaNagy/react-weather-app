import React from 'react';
import CurrentWeatherHeader from '../CurrentWeatherHeader/CurrentWeatherHeader';

const formatDate = ({ date }) => {
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dayOfTheWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    return (
        <div>
            <CurrentWeatherHeader day={ dayOfTheWeek[ day ] } time={ `${ hours < 10 ? `0${ hours }` : hours }:${ minutes < 10 ? `0${ minutes }` : minutes }` } />
        </div>
    );
};

export default formatDate;