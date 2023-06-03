import styles from './Exhibitor.module.css';
import {Carousel} from 'react-responsive-carousel';

import videoSrc from '../../assets/projects/h2h/h2h-video.mp4'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Exhibitor(props){

    const isImage = /\.(jpg|jpeg|png|gif|svg)$/i;
    const isVideo = /\.(mp4)$/i;
   
    return <div className={`${styles.exhibitorContainer} ${props.pair ? styles.pair : styles.odd}`}>
        <h2>{props.title}</h2>
        <div className={`${styles.carouselContainer}`}> 
            <Carousel className={`${styles.customCarousel}`}>

                {props.source.map((item, index) => {
                    if (item.match(isVideo)){
                        return <div className={`${styles.carouselContent}`} key={index}>
                            <video controls>
                                <source src={videoSrc} type="video/mp4" />
                            </video>
                        </div>
                    }
                    
                    return <div className={`${styles.carouselContent}`} key={index}>
                        
                        <img src={item} alt={props.title} />
                        
                    </div>
                })}
            </Carousel>
        </div>

        <div className={`${styles.textContainer}`}>
           
            <p>{props.description}</p>

            <a href={props.github} target='_blank'>Repositorio</a>
            <div className={`${styles.techList}`}>
                <div>
                <h4>Tecnologías</h4>
                    <ul>
                        {props.tech.map((item, index) => {
                            return <li key={index} > <img src={item.svg} alt={item.key} /> </li>
                        })}
                    </ul>
                </div>
            </div> 
        </div>
    </div>
}