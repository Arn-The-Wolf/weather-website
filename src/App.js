import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './styles.css';

const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data);
                    setLoading(false);
                });
        });
    }, []);

    return (
        <div className="app">
            {loading ? (
                <p>Loading...</p>
            ) : (
                weatherData && (
                    <>
                        <CurrentWeather data={weatherData.current} />
                        <Forecast data={weatherData.daily} />
                    </>
                )
            )}
        </div>
    );
}

export default App;