import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-1 justify-center'>
        {
        item.map(item=>
        
        <div className='' 
          key={item.id}>
            <Item item={item}/>
        </div>   
        )
        }
    </div>
  )
}

export default ItemList