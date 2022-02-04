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
				<Navbar
					brand="Start Bootstrap"
					home="Home"
					about="About"
					services="Services"
					contact="Contact
				"
				/>
			</div>
			<div>
				<div className="container justify-content-center">
					<div>
						<Jumbotron
							title="A Warm Welcome!"
							paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla et dolor erat. Nunc finibus scelerisque pellentesque.
						Praesent mattis tristique posuere. Integer et tincidunt
						purus. Sed vestibulum odio eu ex gravida, sed pulvinar
						sapien fringilla."
							button="Call to Action!"
						/>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div>
						<Card
							title="Card Title"
							card1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et dolor erat. Nunc finibus scelerisque pellentesque."
						/>
					</div>
					<div>
						<Card
							title="Card Title"
							card2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>
					</div>
					<div>
						<Card
							title="Card Title"
							card3="Nunc finibus scelerisque pellentesque."
						/>
					</div>
					<div>
						<Card
							title="Card Title"
							card4="Nulla et dolor erat. Nunc finibus scelerisque pellentesque."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
