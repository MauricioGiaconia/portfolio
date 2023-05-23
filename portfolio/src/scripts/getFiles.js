export async function importAllSvg(softSkills = false) {
  const svgs = [];

  let svgFiles;

  if (softSkills){
    svgFiles = import.meta.glob('../../../img/softSkillsIcons/*.svg');
  } else{
    svgFiles = import.meta.glob('../../../img/icons/*.svg');
  }
  

  for (const path in svgFiles) {

    const module = await svgFiles[path]();

    //Elimino la extension y separo el path para establecer la key con el nombre del icono
    let key = path.replace(/\.svg$/, '').split('/');
   
    svgs.push({svg: module.default, key: key[key.length - 1]});
  }

  return svgs;
}