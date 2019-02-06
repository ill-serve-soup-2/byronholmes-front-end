import React from 'react'

const Modal = (props) =>{

  return(
  <div className = {props.show ? "modal" : "modal-hidden"}>
    <h1>{props.item.name}</h1>
    <button onClick = {props.handleList}>Add Item to Shopping List </button>
    <button onClick = {props.closeModal}>X</button>
  </div>);
}


export default Modal;
