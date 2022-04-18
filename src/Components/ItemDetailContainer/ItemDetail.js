import { useState , useEffect} from "react"
import { getProductsById } from "../../asyncmock"
import Item from "../Item/Item"

const ItemDetail = () => {
    const [product ,setProduct] = useState()
    const [loading , setLoading] = useState (true)
    const [ProductById , setProductById ] = useState ([])

    useEffect (() => {
        getProductsById (4).then (item =>{
            setProduct (item)
        }).catch (err =>{
            console.log (err)
        }).finally (() =>{
            setLoading (false)
        })
        return (() => {
            setProduct()
        })
    },[])

return (
    <div className="ItemDetailContainer">
    {
        loading ?
        <h1> Carga ...</h1>:
        product ?
        <Item {...product}/> :
        <h1>No se encuentra el producto</h1>
        }
        
         <h1>Detalle</h1>
         <li>stock: 100</li>
         <li>categoria:carne</li>
         <li>Pieza entera </li>
         <ul>
            {ProductById.map (p =>{
            return (
                <li key ={p.id}>
                    <p>{p.title}</p>
                    <p>${p.price}</p>
                </li>
            
            ) 
        })}
        </ul>
        



    </div>
)
}

export default ItemDetail
