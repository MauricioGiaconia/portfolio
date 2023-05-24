import styles from './IconLink.module.css';
import {Link} from 'react-router-dom';

export default function IconLink(props){

    return <div className={`${styles.iconContainer}`}>

        {props.download ? <a href={props.link} target='_blank' rel="noopener noreferrer" download>
            <img src={props.icon} alt={props.name} />
            {props.text ? <span>{props.text.toUpperCase()}</span> : false}
        </a> : <a href={props.link} target='_blank' rel="noopener noreferrer" >
            <img src={props.icon} alt={props.name} />
            {props.text ? <span>{props.text.toUpperCase()}</span> : false}
        </a>}
       
    </div>
}