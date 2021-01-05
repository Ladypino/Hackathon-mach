import React, { Fragment } from "react";
import CardsServices from "../../components/CardsServices";
import MenuServices from "../../components/menuServices";
import ServiciosImg from "../../components/servicios";

const MachServices = () => {
  return (
    <Fragment>
      <ServiciosImg />
      <MenuServices />
      <CardsServices />
    </Fragment>
  );
};
export default MachServices;
