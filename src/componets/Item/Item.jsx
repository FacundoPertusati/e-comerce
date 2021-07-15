import React from "react";

const Item = ({item})=>{
    console.log(item)
 return(
  <div>
      <div>{item.id}</div>

      <div>{item.title}</div>
  </div>
 )
}

export default Item