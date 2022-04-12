

const ItemDetail  = ({nombre,img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <h3>{nombre}</h3>
            <button> Ver Detalle</button>
        </section>
    )
}

export default ItemDetail
