import './App.css'
import profileImg from '../../img/profile/profile.png';
import styles from './styles/styles.module.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';


//Components:
import Section from './components/Section/Section.jsx';
import Button from './components/Button/Button.jsx';
import IconLink from './components/IconLink/IconLink.jsx';

import { importAllSvg } from './scripts/getFiles.js';
import downloadIcon from '../../img/downloadIcon/download.svg';
import linkedIn from '../../img/contactIcons/linkedIn.svg';
import github from '../../img/contactIcons/github.svg';

function App() {

  const [skillsIcons, setSkillIcons] = useState([]);
  const [softsIcons, setSoftsIcons] = useState([]);

  const contactIcons = [
    {
      icon: downloadIcon,
      name: 'Download',
      text: 'cv',
      download: true,
      link: '/cv/CV - Mauricio Giaconía 2023.pdf'
    },
    {
      icon: linkedIn,
      name: 'LinkedIn',
      download: false,
      link: 'https://www.linkedin.com/in/mauricio-giaconia/'
    },
    {
      icon: github,
      name: 'Github',
      download: false,
      link: 'https://github.com/MauricioGiaconia'
    }
  ]

  useEffect(() => {
    const loadFiles = async () => {
      const svgSkillsFiles = await importAllSvg();
      const svgSoftFiles = await importAllSvg(true);

      setSkillIcons(svgSkillsFiles);
      setSoftsIcons(svgSoftFiles);
    }

    loadFiles();
  }, []);

  return (
    <BrowserRouter>

      <div className={`${styles.titleContainer}`}>
        <img className={`animate__animated animate__backInLeft ${styles.profileImg}`} src={profileImg} alt="profile-picture" />
        <div className={`animate__animated animate__backInRight ${styles.nameContainer}`}>
          <p>Bienvenido a mi portfolio, soy</p><br />
          <h1>Mauricio Giaconía</h1>
          <p><i>Desarrollador full stack</i></p>

          
          
        </div>

        <div className={`animate__animated animate__backInRight ${styles.linksContainer}`}>

          {
            contactIcons.map((icon, index) => {
              return  <>
                <IconLink key={index} 
                          icon={icon.icon}
                          text={icon.text ? icon.text : false}
                          download={icon.download}
                          name={icon.name}
                          link={icon.link}></IconLink>
              </>
            })

          }
           
          </div>

      </div>

      <div className={`${styles.main}`}>

        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section

            title="Sobre mi"
            text="Soy un desarrollador full stack con más de medio año de experiencia en el desarrollo web especializado en PHP y JavaScript. Mi pasión es crear soluciones innovadoras y funcionales para brindar una experiencia excepcional a los usuarios. 
            Me enfoco en el backend utilizando tecnologías como NodeJS, Express, bases de datos como MongoDB, MySQL, SQLite y PostgreSQL y ORMs como sequelize o mongoose. Además, tengo experiencia en el frontend con NextJS, React y Redux, construyendo interfaces interactivas y dinámicas. 
            A lo largo de mi carrera, he trabajado en proyectos que implicaban la creación de nuevas funcionalidades y resolución de bugs, desarrollando habilidades en resolución de problemas, gestión del tiempo y trabajo en equipo. Estoy siempre dispuesto a asumir nuevos desafíos y buscar soluciones creativas para alcanzar objetivos. 
            Si buscas un desarrollador comprometido, con sólidos conocimientos en PHP, JavaScript y diversas tecnologías, estoy listo para contribuir y agregar valor a tu equipo. ¡Hablemos y trabajemos juntos para llevar tu visión al siguiente nivel!
                  "></Section>
        </div>



        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section title="Habilidades técnicas"
            icons={skillsIcons}></Section>
        </div>

        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section title="Habilidades blandas"
            icons={softsIcons} />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
