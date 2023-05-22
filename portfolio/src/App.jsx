import './App.css'
import profileImg from '../../img/profile/profile.jpg';
import styles from './styles/styles.module.css';
import 'animate.css';

//Components:
import Section from './components/Section.jsx';


//Funcion para importar TODOS los archivos .svg de la carpeta de iconos
async function importAllSvg() {
  const svgs = [];
  const svgFiles = import.meta.glob('../../img/icons/*.svg');

  for (const path in svgFiles) {

    const module = await svgFiles[path]();

    //Elimino la extension y separo el path para establecer la key con el nombre del icono
    let key = path.replace(/\.svg$/, '').split('/');
   
    svgs.push({svg: module.default, key: key[key.length - 1]});
  }

  return svgs;
}



const svgFiles = await importAllSvg();



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
                icons={svgFiles}></Section>
      </div>

    </>
  )
}

export default App
