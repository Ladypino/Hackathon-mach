import React, { Fragment } from "react";
import BenefitsResume from "../../components/BenefitsResume";
import CoverPage from "../../components/Coverpage";
import Download from "../../components/Download";
import GalleryViews from "../../components/Gallery";
import ProfilesResume from "../../components/ProfilesResume";

const Home = () => {
  return (
    <Fragment>
      <CoverPage />
      <BenefitsResume />
      <GalleryViews/>
      <ProfilesResume />
      <Download />
    </Fragment>
  );
};
export default Home;
