import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/category/:id"} element={<ItemListContainer/>} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"*"} element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
