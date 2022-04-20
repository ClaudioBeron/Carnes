import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import { getProductsById } from "../../asyncmock"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Item from "../Item/Item"






const ItemListContainer = () =>{
    const [products , setProducts] = useState ([])
    const {categoryId} =useParams ()
    const {productId} = useParams()


    useEffect(()=>{
        getProducts().then(prod =>{
            setProducts(prod)

        })


    },[])


    
        
    
    return(
        <div>
        
        <ItemList products ={products}/>
        </div>

    )
}
    
   

export default ItemListContainer