import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = CartContext();
    return (
        <div>
            <img src={item.imagen} alt={item.nombre} />
            <div>
                <p>Nombre: {item.nombre}</p>
                <p>Cantidad: {item.stock}</p>
                <p>Precio u.: $ {item.precio}</p>
                <p>Subtotal: $ {item.stock * item.precio}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem