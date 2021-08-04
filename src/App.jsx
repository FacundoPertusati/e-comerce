import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./componets/NavBar/Navbar";
import ItemListContainer from "./componets/ItemList/ItemListContainer";
import Itemdelail from "./componets/Itemdelail/Itemdelail";
import Prosec from "./componets/Prosec";
import Ayuda from "./componets/Ayuda/Ayuda";

function App() {
  const Nosotros = () =>
    alert("Somos una nueva tienda que busca el mejor precio del mercado");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className NombredelaTienda="GameDRX" Nosotros={Nosotros} />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:idCategoria">
          <ItemListContainer />
          </Route>
          <Route path="/Prosec/:id">
            <Prosec />
          </Route>
          <Route path="/Ayuda/">
            <Ayuda />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
