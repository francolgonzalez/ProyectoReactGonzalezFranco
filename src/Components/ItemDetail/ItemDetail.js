import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div className='items-center justify-center p-4'>
     <div className='text-center'>
        <img src={item.img} className='w-64 h-64 object-cover mx-auto mb-4 rounded-sm'alt={item.title}/>
        <h2 className='mb-12 font-'>{item.title}</h2>
        <p className='mx-40 px-40'>{item.description}</p>
        <p className='font-bold'> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div>
      {goToCart ? <Link to='/cart' className='bg-black text-white px-4 py-2 rounded-md mr-2 mx-4 text-decoration-none'>Terminar compra</Link> :<ItemCount stock={10} initial={1} onAdd={onAdd} />}
     </div>
     </div>
  )
}

export default ItemDetail