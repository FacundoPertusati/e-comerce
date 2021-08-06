import React,{useState}from "react";
import { useParams } from "react-router";
import { procesador } from "../Json/procesador.json";
import Itemcount from "./Itemcount/Itemcount";

const Prosec = () => {
  const Aprod = procesador;
  const { id } = useParams();
  const [count,setCount]= useState(1);
  const [finished,setfinished] = useState(false)
  const handendyspley =() =>{
  setfinished(!finished)
  }
console.log(Aprod[0])
  return (
  <div className="iewPruduct">
      
        <img src={Aprod[id].img} alt="procesador" className="single" />
        <h1 className=" titulodelProductoview">{Aprod[id].title}</h1>
        <span className="priceview">{Aprod[id].price}</span>
        {!finished ?(
          <>
        <Itemcount 
        inicial={1}
        stock={Aprod[id].stock}
        count={count}
        setCount={setCount}
        />
        <button className="btnview" onClick={handendyspley}>comprar</button>
        </>
        ):(
          <>
            <p>{count}</p>

            <button onClick={handendyspley}>terminar mi compra </button>

          
          <button onClick={handendyspley}>modificar</button>
          </>
        )
        }
</div>
    
  );
};

export default Prosec;
