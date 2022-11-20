import React, { useState } from 'react';
import "./CurrentWeatherBody.css";

const CurrentWeatherBody = (props) => {
    const { city, country, temperature, description, icon, pressure, wind, humidity } = props.data;
    const [ isCelsiusActive, setIsCelsiusActive ] = useState(true);
    const [ isFarenheitActive, setIsFarenheitActive ] = useState(false);

    const handleCelsiusClick = () => {
        setIsCelsiusActive(!isCelsiusActive);
        setIsFarenheitActive(!isFarenheitActive);
        props.handleCelsiusChange();
    };
    const handleFarenheitClick = () => {
        setIsCelsiusActive(!isCelsiusActive);
        setIsFarenheitActive(!isFarenheitActive);
        props.handleFahrenheitChange();
    };
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h2>
                            { city }, <strong>{ country }</strong>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>
                                        { temperature }
                                        <span id="temp-type">
                                            <span className={ isCelsiusActive ? 'active' : null } onClick={ handleCelsiusClick }>°C</span>
                                            { " " }
                                            |
                                            <span className={ isFarenheitActive ? 'active' : null } onClick={ handleFarenheitClick }>°F</span>
                                        </span>
                                    </h1>
                                    <div>
                                        <h4 id="weather-desc">{ description }</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 weather-details d-flex flex-column align-items-start">
                                    <p>
                                        <strong>Pressure: </strong>
                                        { pressure }hPa
                                    </p>
                                    <p>
                                        <strong>Humidity: </strong>
                                        { humidity }%
                                    </p>
                                    <p>
                                        <strong>Wind: </strong>
                                        { wind }{ isCelsiusActive ? 'meter/sec' : 'miles/hour' }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex align-items-center justify-content-center">
                            <img
                                src={ `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${ icon }.png` }
                                alt={ description }
                                id="icon-current"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeatherBody;