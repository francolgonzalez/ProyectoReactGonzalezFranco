import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../Json/Products.json'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  
  const [item, setItem] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout(()=>{
            resolve( id? Products.filter(item=> item.categoria === id) : Products) 
          }, 3000);
        });
        setItem(data);
      }catch(error){
        console.log('error', error)
      }
    };

    fetchData()

  }, [id])
  
  return (
    <div className=''>
      <div>
        <ItemList item={item}/>
      </div>
    </div>
  )
}

export default ItemListContainer;