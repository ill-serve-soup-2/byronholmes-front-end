import React from 'react';
import './addform.css'

const UpdateItemForm = (props) =>{
  return(
    <div className = {props.show ? "form-container" : "form-container-hidden"}>
        <div className = "form-header">
          <h3>UpdateItem</h3>
          <div className = "close-form" onClick = {props.closeForm}></div>

        </div>
        <div className = "form">
          <form className = "form-form" onSubmit = {props.submitHandler}>
            <input name = "name" onChange = {props.handleChange} className = "text-input" placeholder="Item name..." />
            <input name = "quantity" onChange = {props.handleChange} className = "text-input" placeholder="Item quantity..." />
            <input name = "units" onChange = {props.handleChange} className = "text-input" placeholder="Units..." />
            <input type = "submit" className = "submit-form" value = "Update Item"  />
          </form>
        </div>


      </div>
  );
}




export default UpdateItemForm;
