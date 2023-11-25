import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='text-center'>
    <div className='inline-block border p-4 m-4'>
        <div className=''>
            <img src={item.img} alt={item.title} className='w-64 h-64 object-cover mx-auto mb-4 rounded-sm'/>
            <div className=''>
                <p className='text-black font-bold text-xl mt-4 leading-10'>{item.title} <br></br>$ {item.price}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item