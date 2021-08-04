import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  
  return (
    <div className="df">
     
        <div className="procesadoritems">
          <img
            src={item.img}
            alt="imagen del producto"
            className="imgProduct"
          />
           <Link to={`/Prosec/${item.id}`}>
          <h2 className="titulodelProducto">{item.title} </h2>
          <p className="prices">{item.price}</p>
          <button className="botonPoducto">ver en detalle</button>
          </Link>

        </div>
     
    </div>
  );
};

export default Item;
