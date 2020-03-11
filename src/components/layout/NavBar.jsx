import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    backgroundColor: "#ef5350"
  }
};

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top"
      style={styles.nav}
    >
      <Link
        to="/"
        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
      >
        Pokedex
      </Link>
    </nav>
  );
};

export default NavBar;
