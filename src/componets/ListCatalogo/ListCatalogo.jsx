import React, { useState } from "react";
import { category } from "../../Json/category.json";
import { Link } from "react-router-dom";

const ListCatalogo = () => {
  const [display, setdisplay] = useState(false);

  const hadledisplay = () => setdisplay(!display);

  return (
    <section>
      
      <ul className="ListCatalogo">
        {category.map((item) => {
          return (
           <Link to={`/categoria/${item.id}`}><li className="ListCatalogoItem" key={item.id}>
              {" "}
              {item.title}
            </li></Link> 
          );
        })}
      </ul>
    </section>
  );
};

export default ListCatalogo;
