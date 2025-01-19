import React from 'react';
import Navbar from '../components/Navbar';
import './GitLab.css'; // Importando o CSS específico da página

const GitLab = () => {
  const projects = [
    { name: 'Portifólio 03-2024', url: 'https://github.com/mynameisraphax/portfolio2024', description: 'Projeto de 2024 utilizando frameworks React + Vite' },
    { name: 'Gerenciador de Serviços 11-2024', url: 'https://github.com/mynameisraphax/gestao-app', description: 'Projeto de 2024 utilizando framework React + beck em PHP' },
    { name: 'Site Portifólio 11-2024', url: 'https://github.com/mynameisraphax/portf-front', description: 'Projeto de 2024 utilizando framework React' },
    { name: 'Painel - gestao de clientes', url: 'https://github.com/mynameisraphax/painel-de-gestao', description: 'Projeto simples de gestao de clientes HTML CSS + PHP' },
    { name: 'Ferramentas em Python', url: 'https://github.com/mynameisraphax/Auto-insert', description: 'Algumas ferramentas para manipulação de texto em Python' },
    { name: 'Ferramentas em Python 2', url: 'https://github.com/mynameisraphax/removelinhasreptpy', description: 'Algumas ferramentas para manipulação de texto em Python' },
    { name: 'Ferramentas em Python 3', url: 'https://github.com/mynameisraphax/Auto-insert', description: 'Algumas ferramentas para manipulação de texto em Python' },
    { name: 'Ferramentas em Python 4', url: 'https://github.com/mynameisraphax/Auto-insert', description: 'Algumas ferramentas para manipulação de texto em Python' },
    { name: 'Ferramentas em Python 3', url: 'https://github.com/mynameisraphax/Auto-insert', description: 'Algumas ferramentas para manipulação de texto em Python' }
  ];

  return (
    <div className="gitlab-page">
      <Navbar />
      <div className="gitlab-content">
        <h2>Meus Projetos no GitLab</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.url} target="_blank" className="project-link">
                <div className="card-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitLab;
