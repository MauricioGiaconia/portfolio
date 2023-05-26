import styles from './Section.module.css'


export default function Section(props){


    let paragraphs = [];

    if (props.text){
        paragraphs = props.text.split('\n');
    }
    return <div className={`${styles.sectionContainer}`}>
        <h2>{props.title.toUpperCase()}</h2>

        <div className={`${styles.sectionContent}`}>
            {props.icons? 
                props.icons.map((icon, index) => {
                    return <div key={index} className={`${styles.iconContainer}`}>
                            <div>
                                <img src={icon.svg} alt={icon.key} />
                            </div>
                            <h5>{icon.key.toUpperCase()}</h5>
                        </div>
                })
                :
                paragraphs.map((paragraph, index) => {
                    return <div key={index}><p>{paragraph}</p><br /></div>;
                })}
        </div>
        
    </div>
}