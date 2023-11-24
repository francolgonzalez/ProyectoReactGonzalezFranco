import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity < stock) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className=''>
            <div className=''>
                <button className='' onClick={decrement}>-</button>
                <h4 className=''>{quantity}</h4>
                <button className='' onClick={increment}>+</button>
            </div>
            <div>
                <button className='' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount