import React from 'react';

const ShoppingList = props =>{
  return(
    <div className = {props.showList ? "shopping-list" : "shopping-list-hidden"}>
      <h1>Shopping List</h1>
      {props.list.map((item, index)=>{
        return(
          <div>{item.name}</div>
        )
      })}
      <button onClick = {props.closeList}>X</button>

    </div>
  )
}

export default ShoppingList;
