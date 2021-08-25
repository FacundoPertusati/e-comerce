// hacemos la destructuracion de la data proveniente de ItemDetailContainer

import React, { useState, useContext } from "react";
import "./ItemDetail.css";
// data base
// import database from '../../DATA/data.json'
// components
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function ItemDetail({ param, detail }) {
  const [visible, setVisible] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  function addCarrito() {
    // setCart([...cart, myItem]);
    setVisible(false);
    onAdd(param);
  }

  const onAdd = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="detail_card">
      <div className="detail_img">
        <img
          src={`${param.img}`}
          alt={`${param.title}`}
          className="detail_img"
        />
      </div>
      <div className="top">
        <h2 className="detail_content">{param.title}</h2>
        <h2 className="detail_prce">${param.price} </h2>
        <p
          className="detail-c"
          onClick={() => {
            detail(param.description);
          }}
        >
          Detalles{" "}
        </p>

        <div className="detail_buttons">
          {visible ? (
            <>
              <button className="button-addC" onClick={() => addCarrito()}>
                Agregar al carrito
              </button>
              <Link to="/">
                <button className="button-Ab">Volver atras</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="button-3" onClick={() => setVisible(true)}>
                  Seguir Viendo
                </button>
              </Link>
              <Link to="/ShoppingCart">
                <button className="button-4">Comprar ahora</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* <h1>{param.title}</h1>
            <h2>{param.price}</h2>
            <h2>{param.category}</h2> */}
    </div>
  );
}
