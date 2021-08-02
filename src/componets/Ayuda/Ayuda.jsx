import React from "react";


const Ayuda = () => {
  return (
    <div>
      <h2 className="TitleCuestion">Preguntas Frecuentes</h2>

      <h2 className="Cuestion">¿Cómo hago un pedido?</h2> 
     <p className="Respuesta">Para armar un pedido simplemente vas agregando al carrito todos los productos que queres, y al finalizar pones comprar. En el 1er paso te pregunta si necesitas envío, luego la forma de pago, luego accedes como cliente o creas un cliente nuevo según corresponda confirmas el pedido y te asigna un número de pedido y te da los datos de pago según corresponda. </p>

<h2 className="Cuestion">¿Cómo uso el servicio de PosVenta y garantías?</h2>
<p className="Respuesta"> Al pie de esta web nos tenes que dejar la consulta con un motivo de los que comiencem con 'PosVenta ...' y el servicio ténico va a estar respondiendo. En caso de preferír venir a la empresa por motivos unicamente de PosVenta, podes hacerlo sacando un turno haciendo click ACÁ . </p>

<h2 className="Cuestion">¿Cómo obtengo el juego y/o beneficios de los productos que se promocionan ese beneficio?</h2>
<p className="Respuesta">Todos los canjes de los juegos y/o beneficios se hacen de forma posterior a la entrega del producto y es totalmente de forma digital. Los canjes se realiza desde www.compragamer.com/canje con los datos de la factura de compra y el mail registrado en la compra. Se toma como fecha válida, para la vigencia de las promociones, la fecha en que fue creado el pedido vía web por el cliente, y no la fecha de pago ni la fecha de la factura. Considere que si realizó la compra del producto en promoción, en tiempo y forma, y no puede realizar el canje dentro de la fecha, ello se debe a que no se cuenta con stock de códigos. Así mismo, sepa que la disponibilidad de códigos es limitada, y una vez se agota, no será posible realizar el canje.</p>

<h2 className="Cuestion">¿Son precios Finales o más IVA?</h2>
<p className="Respuesta">Todos los precios son finales IVA incluido.</p>

<h2 className="Cuestion">¿Los precios publicados en la web en que moneda están?</h2> 
<p className="Respuesta">Todos los precios de la web están expresados en pesos argentinos.  </p>

<h2 className="Cuestion">¿Que costo tiene un envío?</h2>
<p className="Respuesta">El costo del mismo se abona con el pedido, es decir, el pedido incluye el costo del envío. El valor del envío depende de las dimensiones del paquete y distancia. Podrás saber el costo del envío en tiempo real desde www.compragamer.com ingresando tu código postal en el producto a adquirir o a tu pedido. Y según el pedido desde la misma web se le informa si es bonificado el mismo.</p>

<h2 className="Cuestion">¿Hacen envíos al interior?</h2> 
<p className="Respuesta"> Hacemos envíos a todo el país mediante OCA, que es un servicio Puerta a Puerta (puede llegar a tu domicilio o a la sucursal de OCA más cercana a tu domicilio).</p>

<h2 className="Cuestion">¿Hacen factura A?¿Cómo la solicito?</h2> 
<p className="Respuesta">Efectivamente hacemos factura A, y en el caso de ser un cliente nuevo tiene que ingresar el cliente con número de CUIT y en las observaciones del pedido aclarar que es con factura A.</p>
   
   <form action="">

<h2>Si su pregunta, no se encuentra aqui. Escribenos</h2>

   <textarea name="" id="area" cols="100" rows="10" className="preguntas"> </textarea>




   <button type="submit" className="BtnPreguntas">Enviar</button>
       
    </form>   
   
   
   
   
    </div>
  );
};

export default Ayuda;
