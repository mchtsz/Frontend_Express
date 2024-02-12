import React from "react";
import Login from "./components/Login/Login";
import Picture from "./components/Pictures/Pictures";
import { useState, useEffect } from "react";

export default () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [pictures, setPictures] = useState();

  let loggedIn = true;

  const handleLogin = async (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: data,
      // credentials: "include"
    });

    if (response.status === 200) {
      setAuthenticated(true);
      console.log(response.status);
    } else {
      console.log(response.status);
    }
  };

  const getPictures = async () => {
    const result = await fetch("http://localhost:3000/bilder", {
      credentials: "include",
    });
    try {
      const data = await result.json();
      setPictures(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Login login={handleLogin} />
    </main>
  );
};
