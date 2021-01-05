import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Gastronomy from "./Pages/Gastronomy";
import Sushiblue from "./components/SushiBlueGastronomy";
import Help from "./Pages/Help";
import Points from "./Pages/Points";
import MachServices from "./Pages/Mach-services";
import Shops from "./Pages/Shops";
import SaleOfTheDay from "./Pages/Sale-of-the-day";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sale-of-the-day" component={SaleOfTheDay} />
        <Route path="/gastronomy/sushiblue" component={Sushiblue} />
        <Route path="/gastronomy" component={Gastronomy} />
        <Route path="/help" component={Help} />
        <Route path="/points" component={Points} />
        <Route path="/mach-services" component={MachServices} />
        <Route path="/shops" component={Shops} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
