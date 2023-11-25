import { useCartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className=''>
            <img src={product.img} alt={product.title} className="w-64 h-64 object-cover mx-auto mb-4 rounded-sm"/>
            <div>
                <p className="">
                    <span className="font-bold">Título:</span> {product.title}
                </p>
                <p>
                    <span className="font-bold">Cantidad:</span> {product.quantity}
                </p>
                <p>
                    <span className="font-bold">Precio u.:</span> $ {product.price}
                </p>
                <p>
                    <span className="font-bold">Subtotal:</span> $ {product.quantity * product.price}
                </p>
                <button onClick={() => removeProduct(product.id)} className="bg-black text-white px-4 py-2 rounded-md mr-2 mx-4 mb-4">Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem