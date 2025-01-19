import React from 'react';
import Navbar from '../components/Navbar';
import photo from '../assets/photo.jpg';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Ícones das redes sociais

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <img src={photo} alt="Minha Foto" className="about-photo" />
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Olá, sou Raphael Pereira, desenvolvedor front-end com experiência em React e Vue.js, além de trabalhos
            utilizando HTML, CSS e JavaScript puro, sem frameworks. Também possuo conhecimento no back-end com PHP,
            trabalhando principalmente em projetos sem frameworks.<br /><br />
            Tenho uma base sólida em DevOps, com habilidades em deploy automatizado, configuração de ambientes para
            deploy e versionamento utilizando ferramentas como Git, Docker, Terraform e Vagrant. Além disso, possuo
            amplo conhecimento em serviços de nuvem como AWS e Azure, aplicando-os para soluções de infraestrutura e
            deploy.<br /><br />
            Minha experiência abrange servidores web, Active Directory (AD/DC), firewalls e redes, além de
            administração de máquinas cliente e servidores em sistemas Windows e Linux. Também tenho habilidade em
            automação com Python, especialmente para manipulação de dados, e na administração de bancos de dados,
            incluindo modelagem, estruturação, relacionamento e análise. Também tenho experiência com Business
            Intelligence (BI) e práticas de suporte técnico de Nível 3 (N3) em TI.<br /><br />
            Estou sempre buscando oportunidades para evoluir e aplicar minhas habilidades em novos desafios. Sinta-se à
            vontade para explorar minhas experiências enquanto navega por aqui.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/mynameisraphax" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mynameisrafaelpereira" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mynameisraphax" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/byraphathedev/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511978692853" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
