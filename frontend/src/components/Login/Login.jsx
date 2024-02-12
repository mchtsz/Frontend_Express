import React from "react";
import "./login.css";

export default (props) => {
  return (
    <main>
      <h1>Login</h1>
      <form method="POST" onSubmit={props.login}>
        <input type="text" placeholder="Username" name="brukernavn" />
        <input type="password" placeholder="Password" name="passord" />
        <button type="submit">Login</button>
      </form>
    </main>
  )

}