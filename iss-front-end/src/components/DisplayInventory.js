import React, { Component } from "react";
import "./index.css";
import {
	getInv,
	deleteInv,
	updateInv,
	addInv,
} from "../actions/inventoryActions";
import Modal from "./Modal";
import ShoppingList from "./ShoppingList";
import AddItemForm from "./AddItemForm";
import UpdateItemForm from "./UpdateItemForm";
import LogOutButton from "./LogOutButton";
import { connect } from "react-redux";
let newItem = { name: "", quantity: 0, units: "" };
let items = [];
//let selectedItemObject ={name: ""};
let shoppingList = [];
let needsRestocking = [];
let qtyToUpdate = 0;
let currentItemId = 0;
let currentIndex = 0;
class DisplayInventory extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showAddItemForm: false,
			showList: false,
			showUpdateForm: false,
			selectedItem: { name: "" },
			list: shoppingList,
			needsRestocking: needsRestocking,
			loggedIn: true,
		};
	}
	componentDidMount() {
		this.props.getInv();
	}

	logOut = () => {
		localStorage.removeItem("token");
	};

	flagNeedToBuy = item => {
		if (item.quantity <= 0) {
			return true;
		}
		return false;
	};
	showModal = () => {
		this.setState({ showModal: true });
	};
	hideModal = () => {
		this.setState({ showModal: false });
	};
	showUpdateForm = () => {
		this.setState({ showUpdateForm: true });
	};
	hideUpdateForm = e => {
		e.preventDefault();
		this.setState({ showUpdateForm: false });
		console.log(this.state);
	};
	showList = () => {
		this.setState({ showList: true });
	};
	showAddForm = () => {
		this.setState({ showAddItemForm: true });
	};
	closeAddForm = () => {
		this.setState({ showAddItemForm: false });
	};
	closeUpdateForm = () => {
		this.setState({ showUpdateForm: false });
	};
	hideList = () => {
		this.setState({ showList: false });
	};
	delete = (index, id) => {
		this.props.deleteInv(index, id);
	};

	update = (index, id) => {
		console.log("in update");
		currentItemId = id;
		currentIndex = index;
		console.log(currentItemId);
		console.log(currentIndex);
		this.setState({ showUpdateForm: true });
	};
	updateItem = (e, index, id) => {
		e.preventDefault();
		console.log("update item");

		this.props.updateInv(index, id, newItem);
		this.closeUpdateForm();
	};
	fakeMethod = () => {
		return;
	};

	showItem = index => {
		console.log("in showitem");

		this.setState({ selectedItem: this.props.inventory[index] });
	};
	addItem = e => {
		console.log("in add item");
		e.preventDefault();
		this.props.addInv(newItem);
		this.closeAddForm();
	};

	getInfo = event => {
		newItem[event.target.name] = event.target.value;
		console.log(event.target.value);
		console.log(newItem);
	};

	incrementItem = (index, id, item) => {
		item.quantity += qtyToUpdate;

		this.props.updateInv(index, id, item);
	};

	decrementItem = (index, id, item) => {
		item.quantity -= qtyToUpdate;

		this.props.updateInv(index, id, item);
	};

	updateQty = e => {
		qtyToUpdate = 0;
		qtyToUpdate += parseInt(e.target.value);
		console.log(qtyToUpdate);
	};
	zeroUpdateQty = e => {
		qtyToUpdate = 0;
		console.log(qtyToUpdate);
	};
	addItemToList = item => {
		shoppingList.push(item);
		this.setState({});
	};

	removeItemFromList = index => {
		let newList = [];
		for (let i = 0; i < shoppingList.length; i++) {
			if (i !== index) {
				newList.push(shoppingList[i]);
			}
		}
		shoppingList = newList;
		this.setState({ list: shoppingList });
	};

	render() {
		return (
			<div>
				{this.props.fetchingInv ? (
					<h3>Hold on, pulling up data</h3>
				) : (
					<div>
						<AddItemForm
							show={this.state.showAddItemForm}
							submitHandler={this.addItem}
							closeForm={this.closeAddForm}
							handleChange={this.getInfo}
						/>
						<UpdateItemForm
							show={this.state.showUpdateForm}
							submitHandler={e =>
								this.updateItem(e, currentIndex, currentItemId)
							}
							closeForm={this.closeUpdateForm}
							handleChange={this.getInfo}
						/>
						<Modal
							handleList={e =>
								this.addItemToList(this.state.selectedItem)
							}
							show={this.state.showModal}
							item={this.state.selectedItem}
							closeModal={this.hideModal}
							addItem={this.update}
							getInfo={this.getInfo}
							showForm={this.state.showUpdateForm}
							showFormMethod={this.showUpdateForm}
							closeForm={this.hideUpdateForm}
						/>
						<ShoppingList
							removeItem={this.removeItemFromList}
							showList={this.state.showList}
							list={this.state.list}
							closeList={e => this.hideList()}
						/>
						<div className="button-menu">
							<div
								className="button-menu-button"
								onClick={this.showList}
							>
								Shopping List
							</div>
							<div
								className="button-menu-button"
								onClick={this.showAddForm}
							>
								Add Item{" "}
							</div>
							<div
								className="button-menu-button"
								onClick={this.logOut}
							>
								Log Out
							</div>
						</div>
						<div className="item-container">
							<div className="inventory-header">
								<h2>INVENTORY</h2>
							</div>
							{this.props.inventory.map((item, index) => {
								if (index < 15) {
									return (
										<div>
											<div key={item.id} className="item">
												<div className="button-group-1">
													<button
														className="delete-button"
														onClick={e =>
															this.delete(
																index,
																item.id
															)
														}
													>
														<i class="fas fa-trash-alt" />
														&nbsp; Delete
													</button>

													<button
														className="update-button"
														onClick={e =>
															this.update(
																index,
																item.id
															)
														}
													>
														<i class="fas fa-edit" />{" "}
														&nbsp;Update
													</button>
												</div>
												<div
													className="item-content"
													onClick={e => {
														this.showItem(index);
														this.showModal();
													}}
												>
													<div className="content-span-name">
														{item.name}
													</div>
													<div className="content-span-qty">
														{item.quantity >= 0
															? item.quantity
															: 0}
													</div>
													<div className="content-span-units">
														{" "}
														{item.units}{" "}
													</div>
													<div
														className={
															this.flagNeedToBuy(
																item
															)
																? "buy-alert"
																: "no-buy-alert"
														}
													>
														Order
													</div>
												</div>
												<div className="button-group-2">
													<input
														type="number"
														onFocus={() =>
															this.zeroUpdateQty()
														}
														onChange={e =>
															this.updateQty(e)
														}
														className="qty-input"
														placeholder="qty"
													/>

													<div class="plusMinusButtons">
														<button
															className="increment-button"
															onClick={e =>
																this.incrementItem(
																	index,
																	item.id,
																	item
																)
															}
														>
															<i class="fas fa-plus-square" />
														</button>
														<button
															className="decrement-button"
															onClick={e =>
																this.decrementItem(
																	index,
																	item.id,
																	item
																)
															}
														>
															<i class="fas fa-minus-square" />
														</button>
													</div>
												</div>
											</div>
										</div>
									);
								}
								return null;
							})}
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		fetchingInv: state.inventory.fetchingInv,
		inventory: state.inventory.inventory,
		postingInv: state.inventory.postingInv,
	};
};

export default connect(
	mapStateToProps,
	{
		getInv: getInv,
		deleteInv: deleteInv,
		updateInv: updateInv,
		addInv: addInv,
	}
)(DisplayInventory);
