import React from "react";
import Routes from "./routes";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App h-100">
      <Header />

      <Routes />
      <Footer />
    </div>
  );
}

export default App;
