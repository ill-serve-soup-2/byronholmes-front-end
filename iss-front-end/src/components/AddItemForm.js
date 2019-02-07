import React from 'react'
import './addform.css'

const AddItemForm = props =>{
  return(
  <div className = {props.show ? "form-container" : "form-container-hidden"}>
      <div className = "form-header">
        <h3>Add Item</h3>
        <div className = "close-form" onClick = {props.closeForm}></div>

      </div>
      <div className = "form">
        <form className = "form-form" onSubmit = {props.submitHandler}>
          <input name = "name" onChange = {props.handleChange} className = "text-input" placeholder="Item name..." />
          <input name = "quantity" onChange = {props.handleChange} className = "text-input" placeholder="Item quantity..." />
          <input name = "units" onChange = {props.handleChange} className = "text-input" placeholder="Units..." />
          <input type = "submit" className = "submit-form" value = "Add Item" />
        </form>
      </div>


    </div>)
}


export default AddItemForm;
