import Counter from "../Counter/itemCount"
import { useState ,useEffect } from "react"


const ItemDetail = ({setCart, id , name , img ,category ,description ,price ,stock ,cart}) =>{
 
   return (
       <article className="CardItem">
           
           <header className="Header">
           <h2 className="ItemHeader">
               {name}
           </h2>
           
           </header>
           <picture>
               <img src={img} alt ={name} className="ItemImg"/>
            
           </picture>
           <section>
               <p className="info">
                   categoria :{category}
               </p>
               <p className="info">
                   Descripcion :{description}
               </p>
               <p className="info">
                   Precio: {price}
               </p>
               <p className="info">
                   Stock :{stock}
               </p>
               
           </section>
           <footer className="ItemFooter">
               
               

               </footer>
               
       </article>
       
   ) 
}
export default ItemDetail