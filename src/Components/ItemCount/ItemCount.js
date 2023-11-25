import React from 'react'
import { useEffect, useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button disabled={count <= 1} onClick={decrease} className="bg-black text-white px-4 py-2 rounded-md mr-2 mx-4">
				-
			</button>
			<span className="text-black">{count}</span>
			<button disabled={count >= stock} onClick={increase} className="bg-black text-white px-4 py-2 rounded-md ml-2 mx-4">
				+
			</button>
			
			<div>
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="bg-black text-white px-4 py-2 rounded-md mt-4">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;