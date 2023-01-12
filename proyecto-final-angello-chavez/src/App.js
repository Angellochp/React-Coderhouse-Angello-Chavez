import NavBar from '../src/Components/NavBar/Navbar';
import './App.css';
import ItemDetailContainer from './Container/ItemDetailContainer/index';
import ItemListContainer from './Container/ItemListContainer/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h2>No se encontró la página</h2>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;