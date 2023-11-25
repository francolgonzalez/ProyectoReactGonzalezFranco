import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='text-center'>
        <p className='text-3xl font-bold mb-10'>No hay items en el carrito</p>
        <Link to='/' className='bg-black text-white px-4 py-3 rounded-md mx-4 text-decoration-none'>
          Volver a Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p className='text-xl font-bold mt-4'>
        <span className='font-bold text-2xl'>Total: </span>$ {totalPrice()}
      </p>
      <Link to='/checkout'>
        <button className='bg-black text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-800'>
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
};

export default Cart;