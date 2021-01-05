import React, { Fragment } from "react";
import BenefitsResume from "../../components/BenefitsResume";
import CoverPage from "../../components/Coverpage";
import Download from "../../components/Download";
import GalleryViews from "../../components/Gallery";
import ProfilesResume from "../../components/ProfilesResume";
import EducationDiscount from "../../components/EducationDiscount";

const Home = () => {
  return (
    <Fragment>
      <CoverPage />
      <BenefitsResume />
      <ProfilesResume />
      <GalleryViews />
      <Download />
     <EducationDiscount/>
    </Fragment>
  );
};
export default Home;
