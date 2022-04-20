import "./NavBar.css"
import Carro from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



const NavBar = () => {
    return (<nav className="navegacion">

        
        <button> <Link to= "./"> Home</Link> </button>
        <button> <Link to ='/Carnes' className="product"> Productos </Link> </button>  
             <li> Vaca </li>
             <li> Pollo </li>
             <li> Cerdo </li>
     
        <button><Link to='/contactos'> Contactos </Link></button>

        <Carro label ="9"/>
         
    </nav>

    )
}


export default NavBar