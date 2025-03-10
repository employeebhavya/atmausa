import React from "react";
import PageHead from "../components/PageHead";
import ContactSection1 from "../components/contact/ContactSection1";
import GoogleMap from "../components/contact/GoogleMap";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Contact Us"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/contact.png"
        mobileImage="/pageHeader/contact-mobile.png"
      />
      <ContactSection1 />
      <GoogleMap />
    </>
  );
}

export default page;
