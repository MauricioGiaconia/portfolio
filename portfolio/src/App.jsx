import './App.css'
import profileImg from '../../img/profile/profile.png';
import styles from './styles/styles.module.css';
import 'animate.css';
import { useEffect, useState } from 'react';

//Components:
import Section from './components/Section/Section.jsx';
import Button from './components/Button/Button.jsx';
import { importAllSvg } from './scripts/getFiles.js';

function App() {

  const [skillsIcons, setSkillIcons] = useState([]);
  const [softsIcons, setSoftsIcons] = useState([]);



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
    <>

      <div className={`${styles.titleContainer}`}>
        <img className={`animate__animated animate__backInLeft ${styles.profileImg}`} src={profileImg} alt="profile-picture" />
        <div className={`animate__animated animate__backInRight ${styles.nameContainer}`}>
          <p>Bienvenido a mi portfolio, soy</p><br />
          <h1>Mauricio Giaconía</h1>
          <p><i>Desarrollador full stack</i></p>
        </div>



      </div>

      <div className={`${styles.main}`}>

        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section

            title="Sobre mi"
            text="Soy un desarrollador full stack con más de medio año de experiencia en el desarrollo web especializado en PHP y JavaScript. Me apasiona crear soluciones innovadoras y funcionales que brinden una experiencia excepcional a los usuarios. 

            Mi enfoque se centra en el backend utilizando tecnologías como NodeJS, Express y bases de datos como MongoDB, MySQL, SQLite y PostgreSQL y ORMs como sequelize o mongoose. También tengo experiencia en el frontend con NextJS, React y Redux, lo que me permite construir interfaces interactivas y dinámicas.
            
            A lo largo de mi carrera, he tenido la oportunidad de trabajar en proyectos que implicaban la creación de nuevas funcionalidades y la resolución de bugs. Estas experiencias me han permitido desarrollar habilidades sólidas en la resolución de problemas, la gestión eficiente del tiempo y el trabajo en equipo.
            
            Soy un apasionado de aprender y estar al tanto de las últimas tendencias y tecnologías en el desarrollo web. Siempre estoy dispuesto a asumir nuevos desafíos y buscar soluciones creativas para alcanzar los objetivos establecidos.
            
            Si estás buscando a un desarrollador comprometido, con sólidos conocimientos en PHP, JavaScript y un amplio conjunto de tecnologías, estoy listo para contribuir y agregar valor a tu equipo. ¡No dudes en contactarme para discutir cómo puedo ayudarte a llevar tu proyecto al siguiente nivel!
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
    </>
  )
}

export default App
