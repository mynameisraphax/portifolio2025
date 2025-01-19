import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/log_ip.php')
      .then((response) => {
        if (response.data.success) {
          setWeatherData(response.data);
        } else {
          setError(response.data.error || "Erro desconhecido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter dados meteorológicos:", error);
        setError("Houve um erro ao carregar os dados do clima.");
      });
  }, []);

  if (error) {
    return <div className="weather-box"><p>{error}</p></div>;
  }

  if (!weatherData) {
    return <div className="weather-box"><p>Carregando...</p></div>;
  }

  return (
    <div className="weather-box">
      <h2>Clima Atual</h2>
      <p><strong>IP:</strong> {weatherData.ip}</p>
      <p><strong>Cidade:</strong> {weatherData.city}</p>
      <p><strong>Temperatura:</strong> {weatherData.temperature}°C</p>
      <p><strong>Condição:</strong> {weatherData.weather_condition}</p>
      <p><strong>Umidade:</strong> {weatherData.humidity}%</p>
      <p><strong>Velocidade do Vento:</strong> {weatherData.wind_speed} m/s</p>
      <p><strong>Pressão:</strong> {weatherData.pressure} hPa</p>
    </div>
  );
};

export default WeatherComponent;
