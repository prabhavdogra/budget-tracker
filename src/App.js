import React from 'react';
import { useState } from 'react';
import "./assets/app.css";

var itemsList_ = [
	{ 
		key: 1, 
		itemName: "Housing Expense", 
		cost: 10000 
	},
	{ 
		key: 2, 
		itemName: "Food Expenses", 
		cost: 20000 },
	{ 
		key: 3, 
		itemName: "Valentine's Day Gift", 
		cost: 5000 
	},
];

function App() {
	if(localStorage.getItem('itemsList') === null) {
		window.localStorage.setItem('itemsList', JSON.stringify(itemsList_));
	} 
	else {
		itemsList_ = JSON.parse(localStorage.getItem('itemsList'));
	}
	var [itemsList, setItemsList] = useState(itemsList_);
	var [netExpense, setNetExpense] = useState(0);
	netExpense = 0;
	for(var i = 0; i < itemsList.length; i++)
		netExpense += parseInt(itemsList[i].cost);
	const removeItem = (props) => {
		const newItemsList = itemsList.filter(item => item.key !== props.key);
		netExpense += parseInt(props.cost);
		setItemsList(newItemsList);
		window.localStorage.setItem('itemsList', JSON.stringify(newItemsList));
	};	
	const addItem = () => {
		const newItemsList = itemsList;
		const key = newItemsList.length + 1;
		const itemName = document.getElementById("expense-name-input").value;
		const cost = document.getElementById("expense-amount-input").value;
		netExpense += parseInt(cost);
		if(!isNaN(cost) && cost > 0) {
			newItemsList.push({key, itemName, cost});	
			setNetExpense(netExpense);
			setItemsList([...newItemsList]);
			window.localStorage.setItem('itemsList', JSON.stringify(newItemsList));
		}
		else {
			alert("The amount must be a positive integer.");	
		}
	}
	return (
		<div id="app">
			<div id="app-div">
				<div id="item-list">
					<div id="table-heading"><h2>Expenses Table</h2></div>
						{itemsList.map((props) => {
							const { key, itemName, cost } = props;
							const itemKey = "item-" + key;
							return (
								<div className="item-complete" id={itemKey} key={key}>
									<div id="item">
										<div id="item-name">{itemName}</div>
										<div id="cost">{cost}</div>
									</div>
									<button id="close" onClick={() => removeItem(props)}> X </button>
								</div>
							);
						})}
				</div>
			</div>
			<div id="add-item-div">
				<div id='add-item'>
					<div>
						<input type="text" id="expense-name-input" name="fname" placeholder="Expense Name"></input>
					</div>
					<div>
						<input type="text" id="expense-amount-input" name="fname" placeholder="Expense Amount"></input>
					</div>
					<div id="add-div">
						<button id="add-btn" onClick={() => (addItem())}> ADD </button>
					</div>
				</div>
			</div>
			<div id="net-expense">
				<strong>Net Expense: </strong> {netExpense}
			</div>
		</div>
	);
}

export default App;