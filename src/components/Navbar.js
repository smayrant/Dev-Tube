import React from "react";

const Navbar = () => {
	return (
		<div className="ui secondary  menu">
			<h5>Dev-Tube</h5>

			<div className="right menu">
				<div className="item">
					<div className="ui icon input">
						<input type="text" placeholder="Search..." />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
