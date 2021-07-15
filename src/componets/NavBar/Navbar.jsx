import react from "react" ;
import Cart from "./Cart/Cart";

const Navbar = (props) =>{
    return(
        <nav className ="menu">
            <h1 className="titulo-principal">Tienda {props.NombredelaTienda}</h1>
            <ul className="lista">
                <li className="items">categoria 1</li>
                <li className="items">categoria 2</li>
                <li className="items">categoria 3</li>
                <li className="items">categoria 4</li>
                
            </ul>

            <button onClick={props.Nosotros} className="btn">Nosotros </button>

            <div className="img">
                <Cart />
            </div>

        </nav>

    );

};

export default Navbar;