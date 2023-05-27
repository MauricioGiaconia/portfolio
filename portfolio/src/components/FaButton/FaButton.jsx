import styles from './FaButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { useState } from 'react';

export default function FaButton(props){

    const [hidden, setHidden] = useState(false);

    const handleAnimationEnd = (isHidden) => {
      setHidden(isHidden);
    };

    const handleOnClick = () =>{

        if (hidden){
            handleAnimationEnd(false);
        }
        
        props.onClick();
    }

    return  <>
        <div onClick={handleOnClick} className={`${styles.customButton} ${props.isSelected ? styles.selected : ''}`}>
            <FontAwesomeIcon icon={props.faIcon} />
        </div>

        <div className={`animate__animated ${props.isSelected ? 'animate__backInLeft' : `animate__backOutRight`} ${styles.dataContainer} ${hidden ? styles.hidden : ''}`} onAnimationEnd={() => {
            if (!props.isSelected){
                handleAnimationEnd(true);
            } else{
                handleAnimationEnd(false);
            }
        }}>
            <p>{props.data}</p>
        </div>
    </>
    
}