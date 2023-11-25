import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  
  const [item, setItem] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');
    if(id){
      const queryFilter = query(queryCollection, where('categoryId', '==', id));
      getDocs(queryFilter).then((res) => setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
    } else{
      getDocs(queryCollection).then((res)=> setItem (res.docs.map((p)=>({id: p.id, ...p.data()}))));
    }
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