import './App.css'
import profileImg from '../../img/profile/profile.png';
import styles from './styles/styles.module.css';
import 'animate.css';

//Components:
import Section from './components/Section/Section.jsx';
import Button from './components/Button/Button.jsx';


//Funcion para importar TODOS los archivos .svg de la carpeta de iconos
async function importAllSvg(softSkills = false) {
  const svgs = [];

  let svgFiles;

  if (softSkills){
    svgFiles = import.meta.glob('../../img/softSkillsIcons/*.svg');
  } else{
    svgFiles = import.meta.glob('../../img/icons/*.svg');
  }
  

  for (const path in svgFiles) {

    const module = await svgFiles[path]();

    //Elimino la extension y separo el path para establecer la key con el nombre del icono
    let key = path.replace(/\.svg$/, '').split('/');
   
    svgs.push({svg: module.default, key: key[key.length - 1]});
  }

  return svgs;
}



const svgSkillsFiles = await importAllSvg();
const svgSoftFiles = await importAllSvg(true);


function App() {
 
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
                  icons={svgSkillsFiles}></Section>
        </div>

        <div className='animate__animated animate__backInUp'>
          <hr />
          <Section title="Habilidades blandas"
          icons={svgSoftFiles}/>
        </div>

      </div>
    </>
  )
}

export default App
