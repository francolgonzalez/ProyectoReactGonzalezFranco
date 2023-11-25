import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} className='text-center'>
      <div className='inline-block border border-gray-500 p-4 m-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md rounded-md'>
        <div className='group'>
          <img
            src={item.img}
            alt={item.title}
            className='w-64 h-64 object-cover mx-auto mb-4 rounded-sm filter group-hover:filter-none'
          />
          <div className=''>
            <p className='text-gray-800 font-bold text-xl mt-4 leading-10'>
              {item.title} <br />$ {item.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};






export default Item