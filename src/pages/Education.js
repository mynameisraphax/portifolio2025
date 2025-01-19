import React from 'react';
import Navbar from '../components/Navbar';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaDatabase, FaDocker, FaAws } from 'react-icons/fa'; // Ícones principais
import { SiKubernetes, SiPython } from 'react-icons/si'; // Outros ícones específicos

const Education = () => {
  return (
    <div className="education-page">
      <Navbar />
      <div className="education-content">
        <h2>Minha Educação</h2>
        <p><strong>Faculdade:</strong> Centro Universitário FMU - Tecnologia da Informação</p>
        <p><strong>Cursos & Certificados - Resumo:</strong> Desenvolvimento front-end, PHP, Banco de dados, Servidores & Computadores, MySQL, PL-SQL, Redes, AWS, Azure, devOps Etc..</p>
        <p><strong>Habilidades:</strong> React, VueJS, Python, PHP, MySQL, Oracle, PL-SQL, Docker, terraform, Kubernetes, Vagrant, Active Directory, Servidores, Redes, Computadores, GitHub, GitLab Etc...</p>
        <div className="skills-icons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <SiPython title="Python" />
          <FaReact title="React" />
          <FaVuejs title="Vue.js" />
          <FaPhp title="PHP" />
          <FaDatabase title="DBA" />
          <FaDocker title="Docker" />
          <SiKubernetes title="Kubernetes" />
          <FaAws title="AWS" />
        </div>
      </div>
    </div>
  );
};

export default Education;
