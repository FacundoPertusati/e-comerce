import React,{useState,useEffect} from "react" ;
import Item from "../Item/Item"


const ItemList = () => {

    const [listItem,setListItem] = useState([])

            
    const catalago = [
        {
          id: 1,
          title: "Gabinete",
          img: " ",
          category: "1",
          price: "$5600",
          stock: "7",
        },
        {
          id: 2,
          title: "Mother",
          img: " ",
          category: "2",
          price: "$7800",
          stock: "9",
        },
        {
          id: 3,
          title: "Mother",
          img: " ",
          category: "2",
          price: "$7800",
          stock: "9",
        },
        {
          id: 4,
          title: "Mother",
          img: " ",
          category: "2",
          price: "$7800",
          stock: "9",
        },
      ];

      useEffect(()=>{
        
        getItems()

      }, [])

      const getItems = () =>{
          const server = new Promise((resolve,rejet)=>{
            setTimeout(() => {
                resolve(catalago)
            },3000);
          })
          server.then((rest)=>{
            setListItem(rest) 
          })
      }

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

