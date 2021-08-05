import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { procesador } from "../../Json/procesador.json";
import { useParams } from "react-router";

const ItemList = () => {
  const [listItem, setListItem] = useState([]);

  const ArrayItems = procesador;

  const { idCategoria } = useParams();



  
  const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (idCategoria) {
          const ListaFiltrada = ArrayItems.filter(
            (item) => item.category === idCategoria
          );
          resolve(ListaFiltrada);
        } else {
          resolve(ArrayItems);
        }
      },1000);
    });
  };
  getItems().then((result) => setListItem(result));

  useEffect(() => {
    setListItem([]);
    getItems()
  }, [ArrayItems,idCategoria])

  return (
    <div>
      {listItem.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
  };

export default ItemList;
