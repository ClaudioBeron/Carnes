
import Item from "../Item/Item"
import ItemDetail from "../ItemDetailContainer/ItemDetail"

const ItemList = ({products}) => {
    return(
        <div>{products.map(prod => <Item key={prod.id}{...prod}/>)}</div>

        )
}

export default ItemList 