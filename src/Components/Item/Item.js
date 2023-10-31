import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id}>
    <div className='container'>
        <div className=''>
            <img src={item.imagen} alt={item.nombre} className='w-85 rounded-sm'/>
            <div className=''>
                <p className='outline-0 text-black text-3xl mt-6 mb-32'>{item.nombre} - {item.precio}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item