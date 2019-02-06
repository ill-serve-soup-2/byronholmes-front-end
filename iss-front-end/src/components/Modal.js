import React from 'react'
import ItemForm from './ItemForm'
import './modal.css'

const Modal = (props) =>{

  return(
  <div className = {props.show ? "modal" : "modal-hidden"}>
    <div className = "modal-content">
    <h1>{props.item.name}</h1>
  
    </div>
    <button onClick = {props.showFormMethod}>Update Item</button>
    <ItemForm closeForm = {props.closeForm} showForm = {props.showForm} handleItem = {props.updateItem} getInfo = {props.getInfo}/>
    <button onClick = {props.handleList}>Add Item to Shopping List </button>
    <button onClick = {props.closeModal}>X</button>

  </div>);
}


export default Modal;
