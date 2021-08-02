import react from "react" ;
import Cart from "./Cart/Cart";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = (props) =>{
    return(
        <nav className ="menu">
            
            <div>
                <div className="Navtop">
                <Link to={"/"}><h1 className="titulo-principal">Tienda {props.NombredelaTienda}</h1></Link>
            <input type="text"  placeholder="Buscar" className="Busqueda"/>
            <button className="BtnBusqueda">Buscar</button>
            <MdShoppingCart className="cart"/>
            
            </div>
           
           
           <div>
            <ul className="lista">
            <Link to={"/"}><li className="items">Productos</li></Link>
                <li className="items">Arma tu pc</li>
                <li className="items">Mi cuenta</li>
                <Link to={"/Ayuda/"}> <li className="items"> Ayuda</li></Link>
                
            </ul>

            </div>

            {/* <button onClick={props.Nosotros} className="btn">Nosotros </button> */}

           
            </div>

        </nav>

    );

};

export default Navbar;