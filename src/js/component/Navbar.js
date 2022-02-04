import propTypes from "prop-types";
import React from "react";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-xl navbar-dark bg-dark p-2">
			<div className="container" style={{ width: "59.5rem" }}>
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link text-light" href="#">
								{props.home}{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								{props.about}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								{props.services}
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-secondary"
								href="#">
								{props.contact}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	brand: propTypes.string,
	home: propTypes.string,
	about: propTypes.string,
	services: propTypes.string,
	contact: propTypes.string,
};
