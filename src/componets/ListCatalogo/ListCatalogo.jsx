import React, { useState } from "react";

const ListCatalogo = () => {
  const [display, setdisplay] = useState(false);

  const hadledisplay = () => setdisplay(!display);

  const sublist4 = display ? <ul><li>Procesadores AMD </li><li> Procesadores intel</li></ul>  : null

  return (
    <section>
      <ul className="ListCatalogo">
        <li className="ListCatalogoItem" onClick={hadledisplay}> Notebooks </li>
        
     

        <div></div>
        <li className="ListCatalogoItem"onClick={hadledisplay}>Procesadores</li>
        <div>{ sublist4}</div>
        
        

        <li className="ListCatalogoItem"onClick={hadledisplay}>Mothers</li>
        <div>{display ? <ul><li>Mothers AMD </li><li> Mothers intel</li></ul>  : null}</div>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Memorias Ram</li>
        <div>{display ? <ul><li>Memorias</li><li> Memorias Sodimm</li></ul>  : null}</div>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Almacenamiento</li>
        <div>{display ? <ul><li>Discos Rígidos Internos</li><li>  Discos Rígidos Externos </li></ul>  : null}</div>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Placas de Video </li>
        <div>{display ? <ul><li>Placas de Video GeForce</li><li>  Placas de Video Radeon AMD</li></ul>  : null}</div>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Gabinetes, fuentes y coolers</li>
        <div>{display ? <ul><li>Gabinetes</li><li> Fuentes </li> <li>Cooler</li></ul>  : null}</div>

        <li className="ListCatalogoItem">Monitores</li>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Teclados y mouses</li>
        <div>{display ? <ul><li>Teclados</li><li> Mouse</li></ul>  : null}</div>

        <li className="ListCatalogoItem"onClick={hadledisplay}>Audio, parlantes, auriculares y mic </li>
        <div>{display ? <ul><li>Parlantes</li><li> Auriculares </li> <li>Microfono</li></ul>  : null}</div>

        <li className="ListCatalogoItem">Software</li>
      </ul>

      
    </section>
  );
};

export default ListCatalogo;
