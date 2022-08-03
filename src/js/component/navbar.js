import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" width={130} height={60}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/personaje">
					<button className="btn btn-primary">Personajes</button>
				</Link>
			</div>
		</nav>
	);
};
