import React from "react";

export const Jumbotron = () => {
	return (
		<div className="container" style={{ width: "59.5rem" }}>
			<div className="jumbotron rounded m-0 p-5 pl-3 pt-2 bg-light">
				<h1 className="display-4 justify-content-center">
					A Warm Welcome!
				</h1>
				<p className="lead justify-content-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla et dolor erat. Nunc finibus scelerisque pellentesque.
					Praesent mattis tristique posuere. Integer et tincidunt
					purus. Sed vestibulum odio eu ex gravida, sed pulvinar
					sapien fringilla.
				</p>
				<a
					className="btn btn-primary btn-lg justify-content-center"
					href="https://reactjs.org/"
					role="button">
					Call to Action!
				</a>
			</div>
		</div>
	);
};
