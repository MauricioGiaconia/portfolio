export async function importAllSvg(softSkills = false) {
  const svgs = [];

  let svgFiles;

  if (softSkills){
    svgFiles = import.meta.glob('../assets/img/softSkillsIcons/*.svg');
  } else{
    svgFiles = import.meta.glob('../assets/img/icons/*.svg');
  }
  

  for (const path in svgFiles) {

    const module = await svgFiles[path]();

    //Elimino la extension y separo el path para establecer la key con el nombre del icono
    let key = path.replace(/\.svg$/, '').split('/');
   
    svgs.push({svg: module.default, key: key[key.length - 1]});
  }

  return svgs;
}


//Recibe dos parametros, el primero es el array entero donde se buscara, el segundo es un array con los elementos que debo buscar
export function searchIcon(array, search){

  let result = [];
  let count = 0;

  for (let i = 0; i < search.length; i++){
    for (let j = 0; j<array.length; j++){
      
      count = result.length;
     
      switch (true){
        case (search[i] === array[j] || search[i].includes(array[j])):
     
          result.push(search[j]);
          break;
        case (array[j].key != null):
       
          if (search[i] === array[j].key){
            result.push(array[j]);
          }
          break;

      }

      if (count < result.length){
        break;
      }
      
      continue;
    }
  }

  return result;
}