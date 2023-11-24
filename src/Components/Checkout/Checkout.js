import { useState } from "react";
import { CartContext } from "../context/CartContext";
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

    const { cart, removeProduct, totalPrice } = CartContext();

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
            cantidad: producto.quantity,
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

    return(
      <>
        <h2 className="">
            ¡Rellena el formulario y nos contactamos con vos para enviarte tus productos!
        </h2>

        <form onSubmit={manejadorFormulario}>
            {cart.map((producto) => (
                <div className="" key={producto.id}>
                    <p>
                        {' '}
                        {producto.nombre} {producto.cantidad}
                    </p>
                    <p> {producto.precio} </p>
                </div>
            ))}

            <div className="">
                <label className="">Nombre</label>
                <input 
                    className=""
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            
            <div className="">
                <label className="">Apellido</label>
                <input 
                    className=""
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>

            <div>
                <label className="">Telefono</label>
                <input 
                    className=""
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>

            <div>
                <label className="">Email</label>
                <input 
                    className=""
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label className="">Email Confirmacion</label>
                <input 
                    className=""
                    type="text"
                    value={emailConfirmacion}
                    onChange={(e) => setEmailConfirmacion(e.target.value)}
                />
            </div>

            {error && <p className="">{error}</p>}

            {ordenId && (
                <p className="">
                    !Gracias por tu compra! <br/> Este es tu numero de orden: <br/>{' '}
                    {ordenId}{' '}
                </p>
            )}

            <div className="">
                <button className="" type="submit">
                    Finalizar Compra
                </button>
            </div>
            <br/>
            <div>
                <Link to="/">
                    <button className="">Volver al Home</button>
                </Link>
            </div>
        </form>
        </>
    );
};