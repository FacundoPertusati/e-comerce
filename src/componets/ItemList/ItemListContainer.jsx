import React from "react";
import ItemList from "./ItemList";
import ListCatalogo from "../ListCatalogo/ListCatalogo";

const ItemListContainer = (props) => {
  return (
    <div className="fg">
      <ListCatalogo />

      <ItemList />
    </div>
  );
};
export default ItemListContainer;
