import React,{useState,useEffect} from "react" ;
import Item from "../Item/Item"
import {procesador} from "../../Json/procesador.json"





const ItemList = () => {

    const [listItem,setListItem] = useState([])


      useEffect(()=>{
        
        getItems()

      }, [])

      const getItems = () =>{
          const server = new Promise((resolve,rejet)=>{
            setTimeout(() => {
                resolve(procesador)
            },1000);
          })
          server.then((rest)=>{
            setListItem(rest) 
          })
      }
           console.log (listItem)
    return (
       <div>
           {listItem.map((item)=>{
            
            return(
            <Item item={item}/>
            

            )
           })}
       </div>



    )


}

export default ItemList

