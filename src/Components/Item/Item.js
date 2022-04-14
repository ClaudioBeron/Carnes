import { Link } from "react-router-dom"

const Item = ({id, name ,img}) =>{
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <Link to = {'/detalle/${id}'}> Ver Detalle</Link>
        </section>
    )
}

export default Item