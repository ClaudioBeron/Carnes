import "./NavBar.css"
import Carro from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



const NavBar = () => {
    return (<nav className="navegacion">

        
        <button> Empresa </button>
        <button className="product"> Productos </button> 
             <li> Vaca </li>
             <li> Pollo </li>
             <li> Cerdo </li>
             <button>
        <Link to ='/Carnes'>Mercaderia </Link>
      </button>     
        <button> Contactos </button>

        <Carro label ="9"/>
         
    </nav>

    )
}


export default NavBar