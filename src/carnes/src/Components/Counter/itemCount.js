import {useState} from "react"


const Counter = ({initial ,stock ,onAdd}) =>{

    const[count ,setCount]=useState (0)



      

     const decrement =() =>{
        if (count > -10){ 
        setCount(count-1)
        }
     }

     const increment =()  =>{
         if(count < 10){
         setCount(count +1)
         }
     }

     return(
     <div>
         <button onClick = {increment} > + </button>
         <p> {count}</p>
         <button onClick ={decrement} >- </button>
         <div><button onClick={() => onAdd (count)}> Agregar al carrito </button></div>
         </div>

     )
     
     
}

export default Counter
