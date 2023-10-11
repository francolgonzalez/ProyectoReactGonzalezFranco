import Home from '../src/Components/Home';
import './App.css';
import PerfilCard from './Components/PerfilCard';
import ProductCard from './Components/ProductCard';
import Contador from './Components/Contador';
import ContRef from './Components/ContRef';
import User from './Components/User';

function App() {
  return (
    <div>
      <Home/>
      <User/>
      <Contador/>
      <ContRef/>
      <ProductCard img='https://w7.pngwing.com/pngs/394/269/png-transparent-ikea-table-furniture-billionaire-house-painter-and-decorator-black-simple-small-table-angle-white-black-hair-thumbnail.png' price={22000} title='Mesa Comedor'>

        <p>Elegante mesa con descripción hecha con children</p>
        <button>Agregar al carrito</button>

      </ProductCard>
      <ProductCard img='https://images.fravega.com/f1000/8cd950d8d167aa41a5f2ec957c8082ee.jpg' price={10000} title='Silla Comedor'>

        <p>Elegante silla con descripción hecha con children</p>
        <button>Agregar al carrito</button>
        
      </ProductCard>
      
      
      {/* <PerfilCard imagen=''/>
      <PerfilCard imagen=''/> */}
      <PerfilCard imagen='' nombre='Pedro' edad={35} cargo='Backend'/>
    </div>
);
}

export default App;
