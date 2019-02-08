import React from 'react'
import UpdateItemForm from './UpdateItemForm'
import './modal.css'
import './index.css'

const Modal = (props) =>{

  return(
  <div className = {props.show ? "modal" : "modal-hidden"}>
    <div className = "modal-content">
    <div className = "modal-top"><div className = "close-modal" onClick = {props.closeModal}></div></div>
    <div className = "modal-heading"><h1>{props.item.name}</h1><div className = "modal-heading-info">{props.item.quantity}  {props.item.units}</div><div className = "modal-heading-info"></div></div>

    </div>
    <div className = "modal-button-group">
    <div className = "submit-data" onClick = {props.showFormMethod}><div>Update Item</div></div>
    <UpdateItemForm  closeForm = {props.closeForm} showForm = {props.showForm} handleItem = {props.updateItem} getInfo = {props.getInfo}/>
    <div className = "submit-data" onClick= {props.handleList}><div>Add Item to Shopping List</div></div> </div>
  </div>);
}


export default Modal;
