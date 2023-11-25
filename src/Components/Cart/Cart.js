import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if(cart.length === 0) {
    return (
        <>
          <p>No hay items en el carrito</p>
          <Link to='/' className="">Productos</Link>
        </>
    );
  }

  return (
    <>
        { cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <p>
          <span className="font-bold">Total: </span> $ {totalPrice()}
        </p>
        <Link to='/checkout'>
          {' '}
          <button className="bg-black text-white px-4 py-2 rounded-md mt-2">Finalizar Compra</button>
        </Link>
    </>
  );
};

export default Cart