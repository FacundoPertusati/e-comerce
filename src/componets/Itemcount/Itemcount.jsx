
import React,{useState} from "react";


const Itemcount =({inicial,stock})=>{


    const [count,setCount]= useState(1)

    const sumar =()=>{
    console.log("entre")
    setCount(count + 1)
    }

    const restar =()=>{
         setCount(count - 1)
    }
    console.log(stock)
    return( 
    <div className="contador">
    <button onClick = {restar} disabled={count===inicial} className="contadorBtn"> - </button>
    <span className ="cantidad">{count}</span>
    <button onClick = {sumar} disabled={count===stock} className="contadorBtn" >+</button>
    </div>
    )
}
export default Itemcount