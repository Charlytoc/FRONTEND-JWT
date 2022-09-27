import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import { Redirect } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	

	return(
		
		<div className="text-center mt-5 text-light">


			<h1>¿Ya tienes una cuenta?</h1>
			<Link to="/login">
				<span className="navbar-brand mb-0 h1">Login</span>
			</Link>
			<Link to="/signup">
				<span className="navbar-brand mb-0 h1">Signup</span>
			</Link>

			
		</div>
)};
