import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= '¡Bienvenidos a HMD, una pagina de venta de elementos de gimnasio!'/>
    </div>
);
}

export default App;
