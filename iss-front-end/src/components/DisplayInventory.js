import React, { Component } from 'react'
import './index.css'
import { getInv, deleteInv, updateInv, addInv } from '../actions/inventoryActions'
import { connect } from 'react-redux'
let itemsDisplay = [];
let inventoryArr=[];
let item = {name: "", quantity: 0, units: ""}
let name;
let quantity;
let units;

class DisplayInventory extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.getInv()
    if(localStorage.getItem("token")){

  }
  }
  delete = (id)=>{
    this.props.deleteInv(id)
  }

  update = (id) =>{
    this.props.updateInv(id, item);
  }

  showItem = (index) =>{
    console.log(this.props.inventory[index].name)
  }
  addItem = ()=>{
    this.props.addInv(item)
  }

  getInfo = event =>{
    item[event.target.name]  = event.target.value
    console.log(event.target.value)
  }

  render(){


    return(
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (
        <div>
        <h2>INVENTORY</h2>

        <div className = "item-container">
            {
              this.props.inventory.map((item, index)=>{
                if(index<15){
                return (<div>

                <div key ={item.id} onClick = {(e)=>this.showItem(index)} className = "item"><button className = "delete-button" onClick = {(e)=>this.delete(item.id)}>Delete</button>
                <button className = "update-button" onClick={(e)=>this.update(item.id)}>Update</button>{item.name} {item.quantity} {item.units}</div></div>)
              }})
            }
        </div>
        <h3>Add an item</h3>
        <form className = "add-form" onSubmit = {this.addItem}>
          Item Name<input name = "name" onChange = {this.getInfo} />
          Quantity<input name = "quantity" onChange = {this.getInfo} />
          Units<input name = "units" onChange = {this.getInfo} />
          <input type = "submit" value = "Add Item" />


        </form>
        <h3>Update item - Fill in form then click button to update </h3>
        <form className = "add-form" onSubmit = {this.update}>
          Item Name<input name = "name" onChange = {this.getInfo} />
          Quantity<input name = "quantity" onChange = {this.getInfo} />
          Units<input name = "units" onChange = {this.getInfo} />


        </form>
        </div>
      )
    }</div>
  )}}





const mapStateToProps = state => {
  return{
    fetchingInv: state.inventory.fetchingInv,
    inventory: state.inventory.inventory,
    postingInv: state.inventory.postingInv

  }
}

export default connect(mapStateToProps,{getInv, deleteInv, updateInv, addInv})(DisplayInventory);
