import { BsCart } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";


const CartWidget = () => {
  const { totalProducts, cart} = useCartContext();
  
  return (
    <div>
      <button type="button" className="">
        <BsCart/>
        <span className="">{totalProducts() ||cart}</span>
      </button>
    </div>
  )
}

export default CartWidget