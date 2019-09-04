import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomePageJSVideos } from "../actions/allActions";

class HomePageJavascript extends Component {
	componentDidMount () {
		this.props.getHomePageJSVideos();
	}
	render () {
		return (
			<div>
				{this.props.videos.map(video => {
					return (
						<ul>
							<li>{video.snippet.title}</li>
						</ul>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		videos: state.videos
	};
};

export default connect(mapStateToProps, { getHomePageJSVideos })(HomePageJavascript);
