import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";


const styles = {
  app: {
    paddingTop: "4rem",
    minHeight: "100vh"
  }
};

const App = () => {
  return (
    <div className="App" style={styles.app}>
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
