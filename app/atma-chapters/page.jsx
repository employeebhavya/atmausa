import React from "react";
import PageHead from "../components/PageHead";
import AtmaChapterSection1 from "../components/atmac/AtmaChapterSection1";
import AtmaChapterSection2 from "../components/atmac/AtmaChapterSection2";
import AtmaChapterSection3 from "../components/atmac/AtmaChapterSection3";

function page() {
  return (
    <>
      <PageHead
        title="Who We Are"
        subtitle="ATMA Chapters"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/atmac.png"
        mobileImage="/pageHeader/atmac-mobile.png"
      />
      <AtmaChapterSection1 />
      <AtmaChapterSection2 />
      <AtmaChapterSection3 />
    </>
  );
}

export default page;
