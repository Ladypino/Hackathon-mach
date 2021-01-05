import React, { Fragment } from "react";
import HeroPoints from '../../components/HeroPoints';
import HowToAccumulate from "../../components/HowToAccumulate";
import MachProfiles from "../../components/MachProfiles";
import PointsConversion from "../../components/PoinstConversion";

const Points = () => {
  return(
    <Fragment>
      <HeroPoints/>
      <HowToAccumulate />
      <PointsConversion />
      <MachProfiles />
    </Fragment>
  )
};
export default Points;
