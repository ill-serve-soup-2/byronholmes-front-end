import React from 'react'
import './index.css'

const ItemForm = props =>{
  return(
  <form className = {props.showForm ? "add-form" : "add-form-hidden"} onSubmit = {props.handleItem}>
    Item Name<input name = "name" onChange = {(e)=>props.getInfo()} />
    Quantity<input name = "quantity" onChange = {(e)=>props.getInfo()} />
    Units<input name = "units" onChange = {(e)=>props.getInfo()} />
    <input type = "submit" value = "Add Item" />
    <button onClick = {props.closeForm}>Close</button>

  </form>)

}


export default ItemForm
