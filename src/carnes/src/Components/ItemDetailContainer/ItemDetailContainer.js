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
}
export default ItemDetailContainer