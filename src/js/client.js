import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import D3Container from "./components/D3Container.js";
import Footer from "./components/Footer.js";

export default class Layout extends React.Component {
	render(){
		return(
			<div>
				<Header />
				
				<D3Container />

				<Footer />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
