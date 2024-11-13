import React from "react";
import PageHead from "../components/PageHead";
import CharitableContent from "../components/charitable/CharitableContent";

function CharitableActivities() {
  return (
    <>
      <PageHead
        title="What We Do"
        subtitle="Charitable Activities"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/page-head.png"
        mobileImage="/pageHeader/charitable-mobile.png"
      />
      <CharitableContent />
    </>
  );
}

export default CharitableActivities;
