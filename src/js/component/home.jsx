import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//include images into your bundle

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<div className="w-100">
				<Navbar />
			</div>
			<div>
				<div className="container justify-content-center">
					<div>
						<Jumbotron />
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
					<div>
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};
