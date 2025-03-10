import React from "react";
import PageHead from "../components/PageHead";
import GalleryContent from "../components/gallery/GalleryContent";
import GalleryMain from "../components/gallery/GalleryMain";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Gallery"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/gallery.png"
        mobileImage="/pageHeader/gallery-mobile.png"
      />
      <GalleryContent />
      <GalleryMain />
    </>
  );
}

export default page;
