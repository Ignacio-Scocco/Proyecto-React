
import cart from "../components/assets/cart.svg"

function CartWidget () {
    return (
        <div>
            <img className="h-9 mx-4 cursor-pointer" src={cart} alt="carrito de compras"></img>
        </div>

    )
}

export default CartWidget;