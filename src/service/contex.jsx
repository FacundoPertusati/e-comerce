
import React, {createContext,useState} from "react"
export const Context = createContext();
export const DataPovider=({children}) =>{

    const [Cart,setCart] = useState([])
    /// FUNCIONES

    const isntInCar = (recivedItem) => Cart.filter(item=>item.id===recivedItem.id).length===0;
    const AddItem = (recivedItem)=>{
        if(isntInCar(recivedItem)) {
            setCart([...Cart , recivedItem ])
        } else{
            alert("YA ESTA EN EL CARRITO")
        }
    }
    const RemoveCart = (recivedItem) =>{
        let ItemBorrado = Cart.filter( item => item.id=== recivedItem.id)
        setCart(ItemBorrado)

    }
    const clearCart = setCart([])
}