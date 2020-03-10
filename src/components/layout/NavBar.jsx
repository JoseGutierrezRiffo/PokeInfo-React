import React from "react";

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
      <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
        Pokedex
      </a>
    </nav>
  );
};

export default NavBar;
