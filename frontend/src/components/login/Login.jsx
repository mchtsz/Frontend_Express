import React from "react";
const siteUrl = "http://localhost:3000/login";

export default () => {
  return (
    <main>
      <h1>Hello world</h1>
      <form action={siteUrl} method="POST"> 
        <input type="text" placeholder="username" name="brukernavn" />
        <input type="password" placeholder="password" name="passord"/>
        <input type="submit" />
      </form>
    </main>
  );
};
