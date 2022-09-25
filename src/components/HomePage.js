import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Helloo to our web site</h1>
      <p>to add your subdomin for your account pleas sign up</p>

      <Link to="/sing-up">
        <button>Sign up</button>
      </Link>

      <p>if you have an account pleas sign in</p>
      <Link to={"/sing-in"}>
        <button>Sign in</button>
      </Link>
    </div>
  );
};

export default HomePage;
