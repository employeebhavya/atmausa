import React from "react";
import PageHead from "../../components/PageHead";
import BlogInnerPage from "@/app/components/blogInner/BlogInnerPage";

function page() {
  return (
    <>
      <PageHead
        title="Blogs"
        link="/blogs"
        subtitle="Medical Association"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/blog-inner.png"
        mobileImage="/pageHeader/blog-inner-mobile.png"
      />
      <BlogInnerPage />
    </>
  );
}

export default page;
