import React, { Fragment } from "react";
import BenefitsResume from "../../components/BenefitsResume";
import CoverPage from "../../components/Coverpage";
import ProfilesResume from "../../components/ProfilesResume";

const Home = () => {
  return (
    <Fragment>
      <CoverPage />
      <BenefitsResume />
      <ProfilesResume />
    </Fragment>
  );
};
export default Home;
