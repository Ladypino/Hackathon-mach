import React, { Fragment } from "react";
import HeroShops from '../../components/HeroShops';
import ShopsDiscounts from "../../components/ShopsDiscounts";
// import TestCard from "../../components/testCard";

const Shops = () => {
  return(
    <Fragment>
      <HeroShops/>
      <ShopsDiscounts/>
    </Fragment>
  );
};
export default Shops;
