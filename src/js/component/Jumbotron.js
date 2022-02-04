import propTypes from "prop-types";
import React from "react";

export const Jumbotron = (props) => {
	return (
		<div className="container" style={{ width: "59.5rem" }}>
			<div className="jumbotron rounded m-0 p-5 pl-3 pt-2 bg-light">
				<h1 className="display-4 justify-content-center">
					{props.title}
				</h1>
				<p className="lead justify-content-center">{props.paragraph}</p>
				<a
					className="btn btn-primary btn-lg justify-content-center"
					href="https://reactjs.org/"
					role="button">
					{props.button}
				</a>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	title: propTypes.string,
	paragraph: propTypes.string,
	button: propTypes.string,
};
