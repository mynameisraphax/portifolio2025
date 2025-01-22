import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GitLab from './pages/GitLab';
import Education from './pages/Education';
import './App.css';
import backgroundVideo from './assets/background-video.mp4';
import Footer from './components/Footer';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="App">
      {}
      <video
        className="video-background"
        autoPlay
        loop
        muted
        preload="auto"
        onCanPlayThrough={handleVideoLoad}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {}
      {!videoLoaded && (
        <div className="loading-overlay">
          Carregando...
        </div>
      )}

      {}
      {videoLoaded && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gitlab" element={<GitLab />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Router>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
