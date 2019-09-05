import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageJSVideos } from "../../actions/homepageVideoActions/getHomepageJSVideos";
import VideoList from "../Videos/VideoList";

class HomepageJavascript extends Component {
	componentDidMount () {
		this.props.getHomepageJSVideos();
	}
	render () {
		return (
			<div>
				<h1>Javascript</h1>
				<VideoList videos={this.props.videos} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		videos: state.jsVideos
	};
};

export default connect(mapStateToProps, { getHomepageJSVideos })(HomepageJavascript);
