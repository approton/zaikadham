import { useDispatch, useSelector } from "react-redux"
import ItemsList from "./ItemsList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const cartItems = useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="m-auto w-6/12">
                <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>Clear cart</button>
                {cartItems.length === 0 && <h1>Your cart is Empty, please add Items to cart</h1>}
                <ItemsList items={cartItems} />

            </div>
        </div>
    )
}
export default Cart