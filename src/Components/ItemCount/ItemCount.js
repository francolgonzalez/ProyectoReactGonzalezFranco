import React from 'react'
import { useState } from 'react';

const ItemCount = ({stockItems}) => {
  
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
  
    return (
    <div className='container' id="itemcount">
        <div className='row'>
            <div className='col'>
                <div className='btn'>
                    <button className='btn' type='button' onClick={decrementarStock}>-</button>
                    <button className='btn' type='button'>{counter}</button>
                    <button className='btn' type='button' onClick={incrementarStock}>+</button>
                </div>
            </div>
        </div>
    <div className='row'>
        <div className='col'>
            <button className='btn' type='button'>Agregar al carrito</button>
        </div>
    </div>
    </div>
  )
}

export default ItemCount