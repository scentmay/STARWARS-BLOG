import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
				<img src="https://i.pinimg.com/originals/c6/8c/0f/c68c0f53d50ea8aa4a21b6374814b4a2.jpg" width={130} height={50}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/personaje">
					<button className="btn btn-primary">Personajes</button>
				</Link>
			</div>
		</nav>
	);
};
