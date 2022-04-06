import "./CartWidget.css"
const Carro = (props) =>{
    return(
        <button  className="Carro" onClick={props.elCarro}  >{props.label} </button>
    )
}

export default Carro