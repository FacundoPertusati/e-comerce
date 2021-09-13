import React, {useContext} from 'react';
import './Navbar.css';
// Traemos las rutas
import { Link } from 'react-router-dom';
// Import context
import { CartContext } from '../../Context/Context';

import CartWidget from '../CartWidget/CartWidget';
import { Card } from 'semantic-ui-react';


export default function Navbar() {

    const [cart ] = useContext(CartContext)

    return (
        
        <nav className ="menu">
            
        <div>
            <div className="Navtop">
            <Link to={"/"}><h1 className="titulo-principal">Tienda </h1></Link>
        <input type="text"  placeholder="Buscar" className="Busqueda"/>
        <button className="BtnBusqueda">Buscar</button>
        



      <CartWidget numer={cart.length}/>
        
        </div>
       

        <div>
        <ul className="lista">
        <Link to={"/"}><li className="items">Productos</li></Link>
         
            <Link to={"/Ayuda/"}> <li className="items" > Ayuda</li></Link>
            
        </ul>

        </div>

        </div>
</nav>

    )
}