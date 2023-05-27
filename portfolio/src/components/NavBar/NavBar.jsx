import styles from './NavBar.module.css';

export default function NavBar(props){

    return <nav className={`${styles.navContainer}`}>
        <ul>
            {props.navigation.map((item, index) => {
                return <li key={index}><a href={item.href}>{item.text}</a></li>
            })}
        </ul>
    </nav>
}