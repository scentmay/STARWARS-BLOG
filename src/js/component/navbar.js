import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3 justify-content-center">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaDk24Ka24hxySM4TM3yTkt3vYLbOKIonAQ&usqp=CAU" width={250} height={150}></img>
			</Link>
		</nav>
	);
};
