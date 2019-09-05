import HomepageJavascript from "./HomepageJavascript";
import HomepageJava from "./HomepageJava";
import baseHomepageAPISearch from "../../config/baseHomepageAPISearch";
import React, { Component } from "react";

class Home extends Component {
	componentDidMount () {
		baseHomepageAPISearch.get();
	}
	render () {
		return (
			<div>
				<HomepageJavascript />
				<HomepageJava />
			</div>
		);
	}
}

export default Home;
