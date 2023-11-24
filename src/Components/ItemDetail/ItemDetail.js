import React, { useContext } from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const nombre = item.nombre
  const precio = item.precio

  const { addItem } = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const producto = {
      nombre, precio
    }

    addItem(producto, quantity)
  }

  return (
    <div className='text-center'>
        <div className='bg-white pt-4 px-4 rounded-md'>
            <img src={item.imagen} alt={item.nombre} className='w-50 h-50 mx-auto mb-4 rounded-sm'/>
            <div className='w-90 mx-60 pt-12 px-12'>
              <h2 className='text-black text-5xl font-bold mb-4'>{item.nombre}</h2>
              <p className='text-black w-70 mb-4 px-8'>{item.descripcion}</p>
              <p className='text-black'>Cantidad: {item.stock}</p>
              <p className='text-black'>$ {item.precio}</p>
            </div>
        </div>
        <div className='mb-10'>
           {
              quantityAdded > 0 ? (
                <Link to='/cart'>Terminar compra</Link>
              ) : (
                <ItemCount item={item} initial={1} stock={item.stock} onAdd={handleOnAdd}/>
              )
           }    
        </div>
    </div>
  )
}

export default ItemDetail