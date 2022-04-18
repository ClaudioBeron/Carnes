import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"

import ItemList from "../ItemList/ItemList"






const ItemListContainer = (props) =>{
    const [products , setProducts] = useState ([])


    useEffect(()=>{
        getProducts().then(prod =>{
            setProducts(prod)

        })


    
            


    },[])
    console.log(props.greeting)
    return(
        <div>
        <h1>{props.greeting}</h1>
        <ItemList products ={products}/>
        </div>

    )
}
    
   

export default ItemListContainer