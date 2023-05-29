import styles from './Exhibitor.module.css';
import {Carousel} from 'react-responsive-carousel';

import videoSrc from '../../assets/projects/h2h/h2h-video.mp4'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Exhibitor(props){

    const isImage = /\.(jpg|jpeg|png|gif)$/i;
    const isVideo = /\.(mp4|mov|avi)$/i;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
   
    return <div className={`${styles.exhibitorContainer}`}>
      
        <div className={`${styles.carouselContainer}`}> 
            <Carousel className={`${styles.customCarousel}`}>

                {props.source.map((item, index) => {
                    return <div className={`${styles.carouselContent}`} key={index}>
                        {
                        <img src={item} alt={props.title} />
                        }
                    </div>
                })}

                <div className={`${styles.carouselContent}`}>
                    <video controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </Carousel>
        </div>

        <div className={`${styles.textContainer}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>

            <div className={`${styles.techList}`}>
                
                <div>
                    <ul>
                        {props.tech.map((item, index) => {
                            return <li key={index} > {item} </li>
                        })}
                    </ul>
                </div>
            </div> 
        </div>
    </div>
}