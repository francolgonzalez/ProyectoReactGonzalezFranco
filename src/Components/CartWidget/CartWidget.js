import { BsCart } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";


const CartWidget = () => {
  const { totalProducts, cart} = useCartContext();
  
  return (
    <div className="relative">
      <button type="button" className="flex items-center relative">
      <BsCart className="mr-2"/>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">{totalProducts() ||cart}</span>
      </button>
    </div>
  )
}

export default CartWidget