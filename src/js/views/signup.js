import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	
    const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	

	
	const signupFunc = (e)=>{
		e.preventDefault();
		actions.signup(email,password)


	}
    console.log(email, password)

	return (<>
    {store.redi_to_log ? <Redirect to="/login"/> :
    <div className="container text-light">
    <h1 className="text-center text-danger">POR FAVOR CREA TU CUENTA</h1>
	<form className="w-50 mx-auto" onSubmit={signupFunc}>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">
				Email address
				</label>
				<input
				type="email"
				className="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp"
				value={email}
				onChange={(e)=>setEmail(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">
				Password
				</label>
				<input
				type="password"
				className="form-control"
				id="exampleInputPassword1"
				value={password}
				onChange={(e)=>setPassword(e.target.value)}
				/>
			</div>
            {/* <Link to="/login"> */}
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
            {/* </Link> */}
			</form>
            </div>}
	</>
	)
};
