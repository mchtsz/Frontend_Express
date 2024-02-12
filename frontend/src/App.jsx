import React from "react";
import Login from "./components/login/Login";
import {useState, useEffect} from "react"
export default () => {
	const [authenticated, setAuthenticated] = useState(false)

	return (
		<>
			<Login />
		</>
	);
};
