import React from "react";
import PageHead from "../components/PageHead";
import DonationForm from "../components/DonationForm";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Donation Form"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/contact.png"
        mobileImage="/pageHeader/contact-mobile.png"
      />
      <DonationForm />
    </>
  );
}

export default page;
