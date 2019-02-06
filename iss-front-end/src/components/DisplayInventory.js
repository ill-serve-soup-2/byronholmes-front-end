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

<<<<<<< HEAD
  incrementItem = (item,id)=>{
    item.quantity +=1
    console.log('increment')
    console.log('quantity')
    console.log(item.quantity);
    this.props.updateInv(id,item )
  }

  decrementItem = (item,id) =>{
    item.quantity -=1
    console.log('decrement')
    console.log('quantity')
    console.log(item.quantity)
    this.props.updateInv(id,item)
  }

=======
>>>>>>> ae2533a41ab141b9bd4ce31af69d77fda63b927b
  render(){


    return(
<<<<<<< HEAD

=======
>>>>>>> ae2533a41ab141b9bd4ce31af69d77fda63b927b
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (
        <div>
        <h2>INVENTORY</h2>

        <div className = "item-container">
<<<<<<< HEAD
            <div className = "container-heading"><span>Item</span><span>Quantity</span><span>Units</span></div>
=======
>>>>>>> ae2533a41ab141b9bd4ce31af69d77fda63b927b
            {
              this.props.inventory.map((item, index)=>{
                if(index<15){
                return (<div>

                <div key ={item.id} onClick = {(e)=>this.showItem(index)} className = "item"><button className = "delete-button" onClick = {(e)=>this.delete(item.id)}>Delete</button>
<<<<<<< HEAD
                <button className = "update-button" onClick={(e)=>this.update(item.id)}>Update</button>{item.name} {item.quantity} {item.units} <button onClick = {(e)=>{this.incrementItem(item,item.id)}}>+</button><button onClick = {(e)=>{this.decrementItem(item,item.id)}}>-</button></div>

                </div>)
=======
                <button className = "update-button" onClick={(e)=>this.update(item.id)}>Update</button>{item.name} {item.quantity} {item.units}</div></div>)
>>>>>>> ae2533a41ab141b9bd4ce31af69d77fda63b927b
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
