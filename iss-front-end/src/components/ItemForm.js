import React from 'react'
import './itemForm.css'

const ItemForm = props =>{
  return(
  <form className = {props.showForm ? "add-form" : "add-form-hidden"} onSubmit = {props.handleItem}>
    Item Name<input className = "form-input" name = "name" onChange = {(e)=>props.getInfo()} />
    Quantity<input className = "form-input" name = "quantity" onChange = {(e)=>props.getInfo()} />
    Units<input className = "form-input" name = "units" onChange = {(e)=>props.getInfo()} />
    <input className = "submit-form" type = "submit" value = "Add Item" />
    <div className = "close-button" onClick = {props.closeForm}>Close</div>

  </form>)

}


export default ItemForm
