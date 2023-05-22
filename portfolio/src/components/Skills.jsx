

export default function Skills(props) {
    return <div>
        <h2>Habilidades técnicas</h2>
        {props.map((item) =>{
            return <img src={item.svg} alt={item.key} />
        })}
    </div>
}