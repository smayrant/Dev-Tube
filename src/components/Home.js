import HomePageJavascript from "./HomePageJavascript";
import baseAPISearch from "../config/baseAPISearch";

import React, { Component } from "react";

class Home extends Component {
	componentDidMount () {
		baseAPISearch.get();
		// console.log(func);
	}
	render () {
		return (
			<div>
				<HomePageJavascript />
			</div>
		);
	}
}

export default Home;
