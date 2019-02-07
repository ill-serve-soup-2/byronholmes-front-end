import React from 'react';
import './shoppingList.css'
const ShoppingList = props =>{
  return(
    <div className = {props.showList ? "shopping-list" : "shopping-list-hidden"}>
      <div className = "list-top"><div onClick = {props.closeList} className = "close-list"></div></div>
      <div className = "list-header"><h1>Shopping List</h1></div>
      {props.list.map((item, index)=>{
        return(
          <div className = "list-element"><div className = "remove-item" onClick = {(e)=>props.removeItem(index)}></div><div className = "listed-item"><span className = "index">{index+1}.</span> {item.name}</div></div>
        )
      })}

    </div>
  )
}

export default ShoppingList;
