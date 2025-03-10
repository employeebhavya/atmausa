import React from "react";
import PageHead from "../components/PageHead";
import AnnualConvention from "../components/annual/AnnualConvention";

function page() {
  return (
    <>
      <PageHead
        title="What We Do"
        subtitle="Annual Convention"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/annual.png"
        mobileImage="/pageHeader/annual-mobile.png"
      />
      <AnnualConvention />
    </>
  );
}

export default page;
