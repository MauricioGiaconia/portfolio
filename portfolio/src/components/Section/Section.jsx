import styles from './Section.module.css'


export default function Section(props){
    return <div className={`${styles.sectionContainer}`}>
        <h2>{props.title}</h2>

        <div className={`${styles.sectionContent}`}>
            {props.icons? 
                props.icons.map((icon) => {
                    return <div className={`${styles.iconContainer}`}>
                            <div>
                                <img src={icon.svg} alt={icon.key} />
                            </div>
                            <h5>{icon.key.toUpperCase()}</h5>
                        </div>
                })
                :<p>{props.text}</p>}
        </div>
        
    </div>
}