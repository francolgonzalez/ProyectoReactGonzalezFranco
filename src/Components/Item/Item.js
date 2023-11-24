import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='text-center'>
    <div className='inline-block border p-4 m-4'>
        <div className=''>
            <img src={item.imagen} alt={item.nombre} className='w-80 h-70 rounded-sm'/>
            <div className=''>
                <p className='outline-0 text-black text-xl mt-6 mt-16 mb-10'>{item.nombre} - {item.precio}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item