import React from 'react';
const Weather = props =>(
    
        <div className="weather-info">
        {props.city && props.country &&<p className="weather_ _key">Location: 
        <span className="weather_ _value">{props.city}, {props.country}</span></p>}
        {props.temperature && <p className="weather_ _key">Temperature: 
        <span className="weather_ _value">{props.temperature}</span></p>}
        {props.humidity && <p className="weather_ _key">Humidity: 
        <span className="weather_ _value">{props.humidity}</span></p>}
        {props.description && <p className="weather_ _key">Conditions: 
        <span className="weather_ _value">{props.description}</span></p>}
        {props.error && <p className="weather_ _error">{props.error}</p>}
        </div>
    
);
    
export default Weather;