import { useState } from "react"
import { Link } from "react-router-dom"
import Counter from "../Counter/itemCount"

const Item = ({ id, name ,img}) =>{
    const handleOnAdd =(count) =>{
        console.log("agregar al carrito")
        setQuantity (count)
    }
    const [quantity , setQuantity] = useState (0)


    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <Link to = {'/detalle/${id}'}> Ver Detalle</Link>
           {quantity > 0 ? <Link to="/cart">Ir al carrito</Link> :<Counter onConfirm={handleOnAdd}/>}
            
        </section>
    )
}

export default Item