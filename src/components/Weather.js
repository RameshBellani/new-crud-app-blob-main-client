import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await axios.get(`http://localhost:5000/weather?location=${location}`);
        setWeather(response.data);
    };

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div className="weather-info">
                    <h2>{weather.location.name}</h2>
                    <p>{weather.current.condition.text}</p>
                    <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                    <p>{weather.current.temp_c}°C</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
