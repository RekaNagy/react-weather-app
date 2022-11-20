import React from 'react';
import "./CurrentWeatherHeader.css";

const CurrentWeatherHeader = ({ day, time }) => {
  return (
    <div className="card-head">
      <div className="d-block">
        <p className="header-text">
          Last updated on { day } { time }
        </p>
      </div>
    </div>
  )
}

export default CurrentWeatherHeader