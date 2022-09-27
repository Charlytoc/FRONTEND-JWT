import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [mostrar, setMostrar] = useState(false)

	const handleButton = () => {
		actions.get_profile()
		setMostrar(true)
		console.log(store.perfil)
	}


	return (<><div className=" container text-light">
	<h1 className="text-center text-warning">Hola</h1>
	<h2 className="text-center text-light">Mira la información de tu perfil</h2>
	<button className="btn btn-danger" onClick={handleButton}>Click acá</button>
	{ mostrar ? <div className="container text-center"><h1>Email: {store.perfil.email}</h1><h1>Password: {store?.perfil?.password}</h1></div> : null}
	</div></>
		

	)
};
