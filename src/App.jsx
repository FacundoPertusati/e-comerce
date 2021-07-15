import './App.css';
import Navbar from './componets/NavBar/Navbar';
import ItemListContainer from "./componets/ItemList/ItemListContainer"
import Itemcount from './componets/Itemcount/Itemcount';

function App() {

   const Nosotros = () => alert ("Somos una nueva tienda que busca el mejor precio del mercado")

  return (
    <div className="App">
      <Navbar className
      NombredelaTienda="GameDRX"
       Nosotros ={Nosotros}  />
       <ItemListContainer
        Greting = "hola Dennisss , ¿como anda usted?" />
        <Itemcount  inicial={1}
        
        max={7}/>

 </div>
  );
}

export default App;
