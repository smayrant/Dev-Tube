import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageJavaVideos } from "../../actions/homepageVideoActions/getHomepageJavaVideos";
import VideoList from "../Videos/VideoList";

class HomepageJava extends Component {
	componentDidMount () {
		this.props.getHomepageJavaVideos();
	}
	render () {
		return (
			<div>
				<h1>Java</h1>
				<VideoList videos={this.props.videos} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		videos: state.javaVideos
	};
};

export default connect(mapStateToProps, { getHomepageJavaVideos })(HomepageJava);
