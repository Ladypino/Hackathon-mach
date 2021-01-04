import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Gastronomia from "./Pages/Gastronomia";
import Ayuda from "./Pages/Ayuda";
import Puntos from "./Pages/Puntos";
import Servicios from "./Pages/Servicios";
import Tiendas from "./Pages/Tiendas";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/gastronomia" component={Gastronomia} />
        <Route path="/ayuda" component={Ayuda} />
        <Route path="/puntos" component={Puntos} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/tiendas" component={Tiendas} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
