import React from "react";
import { useParams } from "react-router";
import { procesador  } from "../Json/procesador.json";
import Itemcount from "./Itemcount/Itemcount";

const Prosec = () => {
  const Aprod = procesador;

  const { id } = useParams();

  return (
    <div>
     
      <div className="iewPruduct">
      
      <img src={Aprod[id].img} alt="procesador" className="single" />
      <h1 className=" titulodelProductoview">{Aprod[id].title}</h1>
      <span className="priceview">{Aprod[id].price}</span>

      <Itemcount />
      <button className="btnview">comprar</button>
      </div>
    </div>
  );
};

export default Prosec;
