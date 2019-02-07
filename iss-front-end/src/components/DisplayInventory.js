import React, { Component } from 'react'
import './index.css'
import { getInv, deleteInv, updateInv, addInv } from '../actions/inventoryActions'
import Modal from './Modal'
import ShoppingList from './ShoppingList'
import AddItemForm from './AddItemForm'
import { connect } from 'react-redux'
let newItem = {name: "", quantity: 0, units: ""}
let items = []
//let selectedItemObject ={name: ""};
let shoppingList = [];
let needsRestocking = []

class DisplayInventory extends Component{
  constructor(){
    super();
    this.state = {
      show: false,
      showList: false,
      showUpdateForm: false,
      selectedItem: {name: ""},
      list: shoppingList,
      needsRestocking: needsRestocking
    }
  }
  componentDidMount(){
  this.props.getInv()


  }
  componentWillUpdate(){



  }


  flagNeedToBuy = (item)=>{
    if(item.quantity <=0){
      return true
    }
    return false;
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

  update = (index,id) =>{
    console.log(newItem)
    console.log('update')
    this.props.updateInv(index,id, newItem);
  }
  fakeMethod = () =>{
    return;
  }

  showItem = (index) =>{
    console.log('in showitem')

    this.setState({selectedItem: this.props.inventory[index]})

  }
  addItem = ()=>{
    this.props.addInv(newItem)
  }

  getInfo = event =>{
    newItem[event.target.name]  = event.target.value
    console.log(event.target.value)
    console.log(newItem)
  }

  incrementItem = (index, id, item) =>{
    item.quantity +=1;
    this.props.updateInv(index,id, item)
  }

  decrementItem = (index,id,item) =>{
    if(item.quantity>0){
    item.quantity-=1;
    this.props.updateInv(index,id, item)}
    else{
      needsRestocking.push(id)
      this.setState({needsRestocking:needsRestocking})
    }
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


    return(
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (

        <div>
        <AddItemForm />
        <Modal
         handleList = {(e)=>this.addItemToList(this.state.selectedItem)} show = {this.state.show}
          item = {this.state.selectedItem} closeModal = {this.hideModal}
          addItem = {this.update} getInfo={this.getInfo}
          showForm = {this.state.showUpdateForm}
          showFormMethod = {this.showUpdateForm}
          closeForm = {this.hideUpdateForm}
           />
           <ShoppingList removeItem = {this.removeItemFromList} showList = {this.state.showList} list = {this.state.list} closeList = {(e)=>this.hideList()} />
           <button onClick = {this.showList}>Shopping List</button>

        <div className = "item-container">
        <div className ="inventory-header">
        <h2>INVENTORY</h2>
        </div>
            {
              this.props.inventory.map((item, index)=>{

                if(index<15){
                return (<div>
                          <div key ={item.id}  className = "item">
                          <div className = "button-group-1"><button className = "delete-button" onClick = {(e)=>this.delete(index,item.id)}>Delete</button>
                          <button className = "update-button" onClick={(e)=>this.update(index, item.id)}>Update</button></div>
                          <div className = "item-content" onClick = {(e)=>{this.showItem(index);this.showModal()}}>
                            <div className = "content-span-name">{item.name}</div>
                            <div className = "content-span-qty">{(item.quantity >=0) ? item.quantity : 0}</div>
                            <div className = "content-span-units"> {item.units} </div>
                            <div className = {this.flagNeedToBuy(item) ? 'buy-alert' : 'no-buy-alert'}>Order</div>
                          </div>
                          <div className = "button-group-2">
                          <button className = "increment-button" onClick = {(e)=>this.incrementItem( index,item.id,item)}>+</button>
                          <button className = "decrement-button" onClick = {(e)=>{this.decrementItem(index, item.id,item)}}>-</button></div>

                          </div>
                        </div>)

              }
              return null;
            })
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
        <form className = "add-form" >
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
