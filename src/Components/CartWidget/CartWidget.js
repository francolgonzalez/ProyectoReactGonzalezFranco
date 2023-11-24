import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return (
    <div>
      <Link to='/cart' className="" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <BsCart></BsCart>
        { totalQuantity }
      </Link>
    </div>
  )
}

export default CartWidget