const ItemDetail = ({id , name , img ,category ,description ,price ,stock}) =>{
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