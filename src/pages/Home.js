// client/src/pages/Home.js
import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <h1>Portfólio de Raphael Pereira (RaphaX)</h1>
        <p>Desenvolvedor Front-End / DevOps / AWS & Azure / Infra / Técnico & Analista TI</p>
        <WeatherComponent />
      </div>
    </div>
  );
};

export default Home;
