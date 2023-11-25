import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

export const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const { cart, removeProduct, totalPrice } = useCartContext();

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor completa todos los campos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden');
            return;
        }
        const total = totalPrice();
        const orden = {
            items: cart.map((producto) => ({
            id: producto.id,
            nombre: producto.title,
            cantidad: producto.stock,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
    };

    Promise.all(
        orden.items.map(async (productoOrden) => {
            const db = getFirestore();
            const productoRef = doc(db, 'products', productoOrden.id);

            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;

            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
            });
        })
    )
        .then(() => {
            const db = getFirestore();
            addDoc(collection(db, 'orders'), orden)
                .then((docRef) => {
                    setOrdenId(docRef.id);
                    removeProduct();
                })
                .catch((error) => {
                    console.log('Error en creacion de orden', error);
                    setError('Error en orden');
                });
        })
        .catch((error) => {
            console.log('No se puede actualizar el stock', error);
            setError('No se actualizo el stock')
        });

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
};

return (
    <>
      <h2 className="text-xl font-bold mt-4 mb-8">
        ¡Rellena el formulario y nos contactamos contigo para enviarte tus productos!
      </h2>
  
      <form onSubmit={manejadorFormulario} className="max-w-md mx-auto py-4">
        {cart.map((producto) => (
          <div className="mb-4" key={producto.id}>
            <p>
              {producto.nombre} {producto.cantidad}
            </p>
            <p> {producto.precio} </p>
          </div>
        ))}
  
        <div className="mb-4">
          <label className="block mb-1">Nombre</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
  
        <div className="mb-4">
          <label className="block mb-1">Apellido</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
  
        <div className="mb-4">
          <label className="block mb-1">Teléfono</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
  
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div className="mb-4">
          <label className="block mb-1">Email Confirmación</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
  
        {error && <p className="text-red-500 mb-4">{error}</p>}
  
        {ordenId && (
          <p className="text-green-600 mb-4">
            ¡Gracias por tu compra! <br /> Este es tu número de orden: <br /> {ordenId}{' '}
          </p>
        )}
  
        <div className="mb-4">
          <button className="bg-black text-white px-4 py-2 rounded" type="submit">
            Finalizar Compra
          </button>
        </div>
  
        <div>
          <Link to="/">
            <button className="bg-black text-white px-4 py-2 rounded">Volver al Home</button>
          </Link>
        </div>
      </form>
    </>
  );
}  