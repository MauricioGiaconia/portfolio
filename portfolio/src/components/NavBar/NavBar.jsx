import { useState } from 'react';
import styles from './NavBar.module.css';

export default function NavBar(props){

    const [change, setChange] = useState(false);

    const onClickHandler = () => {
        if (change){
            return setChange(false);
        }

        return setChange(true);
    }

    return  <div className={`${styles.menu}`}>

        <div className={`${styles['menu-bar']}`} onClick={onClickHandler}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div> 
        <nav className={`${styles.nav} ${change ? styles.change : ''}`}>
        
            <ul>
                {props.navigation.map((item, index) => {

                    if (item.download){
                   
                        return <li key={index}><a href={item.href} rel="noopener noreferrer" download>{item.text}</a></li>
                    } 
                    return <li key={index}><a onClick={onClickHandler} href={item.href} rel="noopener noreferrer">{item.text}</a></li>
                })}
            </ul>
        </nav>

        <div className={`${styles['menu-bg']} ${change ? styles['change-bg'] : ''}`}></div>
    </div>
}