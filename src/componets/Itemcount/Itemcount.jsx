
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
    <div>
    <button onClick = {sumar} >+</button>
    <span>{count}</span>
    <button onClick = {restar} >-</button>
    </div>
    )
}
export default Itemcount