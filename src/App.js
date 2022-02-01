import React, {Component} from 'react';
import "./assets/app.css";

const itemsList = [
	{id: 1, name: "Housing Expense", price: 10000},
	{id: 2, name: "Food Expenses", price: 20000},
	{id: 3, name: "Valentine's Day Gift", price: 5000},
]
	
class App extends Component {
	render() {
		const netExpense = 0;
		// const []
		// handleClick = () => {
		// 	use
		// }
		const itemName = "Item1";
		const cost = 12;
		return (
			<div id="app-div">
				<div id="item-list">
					<div class="item-complete">
						<div id="item">
							<div id="item-name">{itemName}</div>
							<div id="cost">{cost}</div>
						</div>
						<button id="close"> X </button>
					</div>
					<div class="item-complete">
						<div id="item">
							<div id="item-name">{itemName}</div>
							<div id="cost">{cost}</div>
						</div>
						<button id="close"> X </button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;