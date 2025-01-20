import React from 'react';

const CurrentWeather = ({ data }) => {
    const { temp, humidity, pressure, wind_speed, sunrise, sunset, weather } = data;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    return (
        <div className="current-weather bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">{weather[0].main}</h2>
                    <p className="text-sm text-gray-500">{weather[0].description}</p>
                </div>
                <img src={weatherIcon} alt="weather icon" className="w-20 h-20" />
            </div>
            <div className="mt-4">
                <p className="text-lg">Temperature: {temp}&#176;C</p>
                <p className="text-lg">Humidity: {humidity}%</p>
                <p className="text-lg">Pressure: {pressure} hPa</p>
                <p className="text-lg">Wind Speed: {wind_speed} m/s</p>
                <p className="text-lg">Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
                <p className="text-lg">Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
            </div>
        </div>
    );
};

export default CurrentWeather;