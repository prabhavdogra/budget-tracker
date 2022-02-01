import React, { Component } from 'react';
import "./assets/header.css";

class Header extends Component {
	render() {
		function navRes() {
			let x = document.getElementsByClassName("navElements");
			document.getElementById("navbox-tabs").classList.toggle("text-focus-in-animation");
			for (var i = 0; i < x.length; i++) {
				x[i].classList.toggle("hide");
				x[i].classList.toggle("show");
			}
			
			document.getElementById("line1").classList.toggle("moveLine1");
			document.getElementById("line2").classList.toggle("moveLine2");
			document.getElementById("line3").classList.toggle("moveLine3");
		}
		return (
			<div id="navbar">
				<div id="navbox">
					<div id="hamburger" onClick={navRes}>
						<span id="line1"></span>
						<span id="line2"></span>
						<span id="line3"></span>
					</div>
					<div id="navbox-tabs">
						<div className="navElements hide"><a href="#"> Budget Tracker </a></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;