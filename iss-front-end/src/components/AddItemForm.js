import React from 'react'
import './addform.css'

const AddItemForm = props =>{
  return(
  <div className = "form-container">
      <div className = "form-header">
        <h3>Add Item</h3>
        
      </div>
      <div className = "form">
        <form className = "form-form">
          <input className = "text-input" placeholder="Item name..." />
          <input className = "text-input" placeholder="Item quantity..." />
          <input className = "text-input" placeholder="Units..." />
          <input className = "submit-form" value = "Add Item" />
        </form>
      </div>


    </div>)
}


export default AddItemForm;
