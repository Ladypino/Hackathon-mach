import React from "react";
import Routes from "./routes";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
