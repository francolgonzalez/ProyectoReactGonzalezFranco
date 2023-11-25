import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='text-center'>
        <img src={item.img} className='w-64 h-64 object-cover mx-auto mb-4 rounded-md' alt={item.title} />
        <h2 className='mb-4 text-3xl font-bold'>{item.title}</h2>
        <p className='mb-6 text-lg italic'>{item.description}</p>
        <p className='mb-4 text-gray-700'>Disponibilidad: {item.stock} unidades</p>
        <p className='text-2xl font-bold text-black'>Precio: $ {item.price}</p>
      </div>
      <div className='mt-4'>
        {goToCart ? (
          <Link to='/cart' className='bg-black text-white px-4 py-2 rounded-md mx-4 text-decoration-none hover:bg-gray-800'>
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;