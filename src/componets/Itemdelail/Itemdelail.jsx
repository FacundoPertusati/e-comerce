 import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { procesador } from "../../Json/procesador.json";

const Itemdelail = () => {
  const arrayProducts = procesador;
  const [viewProduct, setViewProduct] = useState();
  const { id: idParams } = useParams();

  const getSingleProduct = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
          console.log(arrayProducts)
       return resolve(arrayProducts.find((item) => item.id));
      }, 2000);
    });
  };

  useEffect(() => {
      setViewProduct()
    getSingleProduct().then((resultado) => setViewProduct(resultado));
  }, [idParams]);

  
  return (
    <div>
      <div >
        {<img src={viewProduct.img} alt="imagen del producto" />}
        <h2 >{viewProduct.title} </h2>
        <p >{viewProduct.price}</p>
        <button >ver en detalle</button>

      </div>
    </div>
  );
};
export default Itemdelail;
