import { useContext } from "react";

const Cart = () => {
    const {cart} =useContext ()
    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod =><li key={prod.id}>{prod.name}</li>)
            }
        </ul>
        </>
    )
}
export default Cart