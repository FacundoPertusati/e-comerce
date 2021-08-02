
import React ,{useState} from "react";

const Itemcount =(props)=>{
    const [count,setcount]= useState(0)

    const sumar =()=>{
        setcount(count + 1)
    }

    const restar =()=>{
        setcount(count - 1)
    }
    return( 
    <div className="contador">
    <button onClick = {restar} className="contadorBtn"> - </button>
    <span className ="cantidad">{count}</span>
    <button onClick = {sumar} className="contadorBtn" >+</button>
    </div>
    )
}
export default Itemcount