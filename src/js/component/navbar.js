import React, {useContext} from "react";
import {Context} from "../store/appContext"
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
	const {store, actions}=useContext(Context)


	let history = useHistory()

	const handleLogout = () => {
		actions.logout();
		if(!store.auth) {
			history.push("/")
		}
	}

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ps-3">INICIO</span>
			</Link>
			<div className="ml-auto">
				{store.auth ? <button className="btn btn-primary" onClick={handleLogout}>Cerrar sesión</button> : null}
					
			
			</div>
		</nav>
	);
};
