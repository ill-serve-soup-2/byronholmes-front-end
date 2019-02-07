import React from 'react'
import ItemForm from './ItemForm'
import './modal.css'
import './index.css'

const Modal = (props) =>{

  return(
  <div className = {props.show ? "modal" : "modal-hidden"}>
    <div className = "modal-content">
    <div className = "modal-top"><div className = "close-modal" onClick = {props.closeModal}></div></div>
    <h1>{props.item.name}</h1>
    </div>
    <div className = "submit-data" onClick = {props.showFormMethod}>Update Item</div>
    <ItemForm  closeForm = {props.closeForm} showForm = {props.showForm} handleItem = {props.updateItem} getInfo = {props.getInfo}/>
    <div className = "submit-data" onClick= {props.handleList}>Add Item to Shopping List </div>


  </div>);
}


export default Modal;
