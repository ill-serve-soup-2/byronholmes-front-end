import React, { Component } from 'react'
import './index.css'
import { getInv, deleteInv, updateInv, addInv } from '../actions/inventoryActions'
import Modal from './Modal'
import ShoppingList from './ShoppingList'
import { connect } from 'react-redux'
let itemsDisplay = [];
let inventoryArr=[];
let item = {name: "", quantity: 0, units: ""}
let name;
let quantity;
let units;
let selectedItemObject ={name: ""};
let shoppingList = [];

class DisplayInventory extends Component{
  constructor(){
    super();
    this.state = {
      show: false,
      showList: false,
      selectedItem: {name: ""},
      list: shoppingList
    }
  }
  componentDidMount(){
    this.props.getInv()
    if(localStorage.getItem("token")){

  }
  }

  showModal = () =>{
    this.setState({show:true})
  }
  hideModal = () =>{
    this.setState({show:false})
  }
  showList = () =>{
    this.setState({showList: true})
  }
  hideList = () =>{
    this.setState({showList: false})
  }
  delete = (id)=>{
    this.props.deleteInv(id)
  }

  update = (id) =>{
    this.props.updateInv(id, item);
  }

  showItem = (index) =>{
    console.log('in showitem')

    this.setState({selectedItem: this.props.inventory[index]})

  }
  addItem = ()=>{
    this.props.addInv(item)
  }

  getInfo = event =>{
    item[event.target.name]  = event.target.value
    console.log(event.target.value)
  }

  incrementItem = (item, id) =>{
    item.quantity +=1;
    this.props.updateInv(id, item)
  }

  decrementItem = (item, id) =>{
    item.quantity-=1;
    this.props.updateInv(id, item)
  }

  addItemToList = (item) =>{
    shoppingList.push(item);
    this.setState({})
  }

  render(){


    return(
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (
        <div>
        <h2>INVENTORY</h2>
        <button onClick = {this.showList}>Shopping List</button>
        <Modal handleList = {(e)=>this.addItemToList(this.state.selectedItem)} show = {this.state.show} item = {this.state.selectedItem} closeModal = {(e)=>this.hideModal()} />
        <ShoppingList showList = {this.state.showList} list = {this.state.list} closeList = {(e)=>this.hideList()} />
        <div className = "item-container">
            {
              this.props.inventory.map((item, index)=>{

                if(index<15){
                return (<div>
                          <div key ={item.id} onClick = {(e)=>{this.showItem(index);this.showModal()}} className = "item">
                          <button className = "delete-button" onClick = {(e)=>this.delete(item.id)}>Delete</button>
                          <button className = "update-button" onClick={(e)=>this.update(item.id)}>Update</button>
                          {item.name} {item.quantity} {item.units}
                          <button className = "increment-button" onClick = {(e)=>this.incrementItem(item, item.id)}>+</button>
                          <button className = "decrement-button" onClick = {(e)=>{this.decrementItem(item, item.id)}}>-</button>
                          </div>
                        </div>)
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
