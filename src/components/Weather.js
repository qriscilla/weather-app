import React from 'react';

// A stateless conditional component that has no state!
const Weather = props => (
// Notice there's no render method.
// We're also not using return because we're returning only one thing.
        <div>
            {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.conditions && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
);

export default Weather;