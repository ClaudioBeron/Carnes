import { useState , useEffect} from "react"
import { getProductsById } from "../../asyncmock"
import Item from "../Item/Item"

const ItemDetail = (setCart , cart) => {
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
        <div >
            {   loading ?
                    <h1>cargando...</h1>:
                product ?
                      <ItemDetail {...product} setCart={setCart} cart={cart}/>:
                      <h1>El producto no existe</h1>
            
        
        
        }
        </div>
    )
}
export default ItemDetailContainer