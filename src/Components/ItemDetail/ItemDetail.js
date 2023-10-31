import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {
  return (
    <div className='row'>
        <div className='col'>
            <img src={item.imagen} alt={item.nombre}/>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>Cantidad: {item.stock}</p>
            <p>$ {item.precio}</p>
        </div>
        <div>
            <ItemCount stockItems={10}/>
        </div>
    </div>
  )
}

export default ItemDetail