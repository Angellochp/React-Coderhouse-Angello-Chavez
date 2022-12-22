import NavBar from '../src/Components/NavBar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
   <> 
   <NavBar/>
   <ItemListContainer name="Bienvenido"/>
   </>
  );
}

export default App;