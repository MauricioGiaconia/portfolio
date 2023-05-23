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
          <h1>Mauricio Giaconía</h1>
          <p><i>Desarrollador full stack</i></p>
        </div>



      </div>

      <div className={`${styles.main}`}>

        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section

            title="Sobre mi"
            text="     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias earum praesentium corrupti dolore. Aliquid, facere aut doloribus deserunt voluptatem molestias dicta saepe cumque. Voluptatum cupiditate minima quod saepe esse nobis?
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
