import React, {Component} from 'react';
import "./assets/footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="sticky">
					<div id="copyright">
						© 2022 All rights reserved.
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;