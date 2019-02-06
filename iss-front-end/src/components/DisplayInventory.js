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
      showUpdateForm: false,
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
  showUpdateForm = () =>{
    this.setState({showUpdateForm: true})
  }
  hideUpdateForm = (e) =>{
    e.preventDefault();
    this.setState({showUpdateForm: false})
    console.log(this.state)
  }
  showList = () =>{
    this.setState({showList: true})
  }
  hideList = () =>{
    this.setState({showList: false})
  }
  delete = (index, id)=>{
    this.props.deleteInv(index, id)
  }

  update = (index, id) =>{
    this.props.updateInv(index, id, item);
  }
  fakeMethod = () =>{
    return;
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

  incrementItem = (id, item) =>{
    item.quantity +=1;
    this.props.updateInv(id, item)
  }

  decrementItem = (id,item) =>{
    item.quantity-=1;
    this.props.updateInv(id, item)
  }

  addItemToList = (item) =>{
    shoppingList.push(item);
    this.setState({})
  }

  removeItemFromList = (index) =>{
    let newList = [];
    for(let i = 0; i<shoppingList.length;i++){
      if(i!==index){
        newList.push(shoppingList[i])
      }

    }
    shoppingList = newList;
    this.setState({list: shoppingList})
  }

  render(){
    console.log('here in redner')
    console.log(this.props.inventory)

    return(
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (
        <div>
        <h2>INVENTORY</h2>
        <button onClick = {this.showList}>Shopping List</button>
        <Modal
         handleList = {(e)=>this.addItemToList(this.state.selectedItem)} show = {this.state.show}
          item = {this.state.selectedItem} closeModal = {this.hideModal}
          addItem = {this.update} getInfo={this.getInfo}
          showForm = {this.state.showUpdateForm}
          showFormMethod = {this.showUpdateForm}
          closeForm = {this.hideUpdateForm}
           />
        <ShoppingList removeItem = {this.removeItemFromList} showList = {this.state.showList} list = {this.state.list} closeList = {(e)=>this.hideList()} />
        <div className = "item-container">
            {
              this.props.inventory.map((item, index)=>{

                if(index<15){
                return (<div>
                          <div key ={item.id}  className = "item">
                          <div className = "button-group-1"><button className = "delete-button" onClick = {(e)=>this.delete(index,item.id)}>Delete</button>
                          <button className = "update-button" onClick={(e)=>this.update(index, item.id)}>Update</button></div>
                          <div className = "item-content" onClick = {(e)=>{this.showItem(index);this.showModal()}}>{item.name} {item.quantity} {item.units}</div>
                          <div className = "button-group-2"><button className = "increment-button" onClick = {(e)=>this.incrementItem( item.id,item)}>+</button>
                          <button className = "decrement-button" onClick = {(e)=>{this.decrementItem( item.id,item)}}>-</button></div>

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

export default connect(mapStateToProps,{getInv: getInv, deleteInv: deleteInv, updateInv: updateInv, addInv: addInv})(DisplayInventory);
