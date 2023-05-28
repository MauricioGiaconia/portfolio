import './App.css'
import profileImg from './assets/img/profile/profile.png';
import styles from './styles/styles.module.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


//Components:
import Section from './components/Section/Section.jsx';
import FaButton from './components/FaButton/FaButton.jsx';
import IconLink from './components/IconLink/IconLink.jsx';
import NavBar from './components/NavBar/NavBar';
import Exhibitor from './components/Exhibitor/Exhibitor';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import { importAllSvg } from './scripts/getFiles.js';
import downloadIcon from './assets/img/downloadIcon/download.svg';
import linkedIn from './assets/img/contactIcons/linkedIn.svg';
import github from './assets/img/contactIcons/github.svg';


function App() {

  const [skillsIcons, setSkillIcons] = useState([]);
  const [softsIcons, setSoftsIcons] = useState([]);
  const [selected, setSelected] = useState(0);

  const contactIcons = [
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

  const onClickButtonHandler = (index) => {
    setSelected(index);
  }

  return (
    <BrowserRouter>

      <header className={`${styles.titleContainer}`}>
        <div className={`animate__animated animate__backInLeft ${styles.navContainer}`}>
          <NavBar 
              navigation={[
                {
                  text:"Sobre mi",
                  href:"#about"
                },
                {
                  text:"Habilidades técnicas",
                  href:"#techSkills"
                },
                {
                  text:"Habilidades blandas",
                  href:"#softSkills"
                },
                {
                  text:"Proyectos",
                  href:"#projects"
                },
                {
                  text:"Experiencia",
                  href:"#experience"
                },
                {
                  text:"Curricullum",
                  href:"/cv/CV - Mauricio Giaconía 2023.pdf",
                  download: true
                }

              ]}></NavBar>
        </div>
        <img className={`animate__animated animate__backInLeft ${styles.profileImg}`} src={profileImg} alt="profile-picture" />
        <div className={`animate__animated animate__backInRight ${styles.nameContainer}`}>
          <p>Bienvenido a mi portfolio, soy</p><br />
          <h1>Mauricio Giaconía</h1>
          <p><i>Desarrollador full stack</i></p>



        </div>

        <div className={`animate__animated animate__backInRight ${styles.linksContainer}`}>

          {
            contactIcons.map((icon, index) => {
              return <IconLink key={index}
                icon={icon.icon}
                text={icon.text ? icon.text : false}
                download={icon.download}
                name={icon.name}
                link={icon.link}></IconLink>

            })

          }

        </div>

      </header>

      <div className={`${styles.main}`}>

        <div className={`animate__animated animate__backInUp ${styles.personalInfo}`}>
          <FaButton faIcon={faEnvelope}
            onClick={() => onClickButtonHandler(0)}
            isSelected={selected === 0}
            data='maurigiaconia@hotmail.com' />
          <FaButton faIcon={faLocationDot}
            onClick={() => onClickButtonHandler(1)}
            isSelected={selected === 1}
            data='Olavarría, Buenos Aires, Argentina' />
          <FaButton faIcon={faPhone}
            onClick={() => onClickButtonHandler(2)}
            isSelected={selected === 2}
            data='(+54)2284-588151' />
        </div>

        <div id='about' className='animate__animated animate__backInUp'>
          <hr />
          <Section

            title="Sobre mi"
            text="Soy un desarrollador full stack con más de medio año de experiencia en el desarrollo web especializado en PHP y JavaScript. Mi pasión es crear soluciones innovadoras y funcionales para brindar una experiencia excepcional a los usuarios. 
            Me enfoco en el backend utilizando tecnologías como NodeJS, Express, bases de datos como MongoDB, MySQL, SQLite y PostgreSQL y ORMs como sequelize o mongoose. Además, tengo experiencia en el frontend con NextJS, React y Redux, construyendo interfaces interactivas y dinámicas. 
            A lo largo de mi carrera, he trabajado en proyectos que implicaban la creación de nuevas funcionalidades y resolución de bugs, desarrollando habilidades en resolución de problemas, gestión del tiempo y trabajo en equipo. Estoy siempre dispuesto a asumir nuevos desafíos y buscar soluciones creativas para alcanzar objetivos. 
            Si buscas un desarrollador comprometido, con sólidos conocimientos en PHP, JavaScript y diversas tecnologías, estoy listo para contribuir y agregar valor a tu equipo. ¡Hablemos y trabajemos juntos para llevar tu visión al siguiente nivel!
                  "></Section>
        </div>



        <div id='techSkills' className='animate__animated animate__backInUp'>
          <hr />
          <Section title="Habilidades técnicas"
            icons={skillsIcons}></Section>
        </div>

        <div id='softSkills' className='animate__animated animate__backInUp'>
          <hr />
          <Section title="Habilidades blandas"
            icons={softsIcons} />
        </div>

        <div id='projects' className='animate__animated animate__backInUp'>
          <hr />
          <Exhibitor
            title='H2H'
            description='eCommerce para colombia'
            source = {[
              github,
              downloadIcon,
              linkedIn
            ]}
            tech = {[
              downloadIcon
            ]
            }
          />
        </div>
        

      </div>
    </BrowserRouter>
  )
}

export default App
