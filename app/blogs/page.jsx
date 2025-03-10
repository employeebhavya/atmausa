import React from "react";
import PageHead from "../components/PageHead";
import BlogMain from "../components/blog/BlogMain";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="News & Blogs"
        description="ATMA is as an organization formed to promote charitable work
        through their foundation (ATMA-CF) nationally and internationally"
        bgImage="/pageHeader/blog.png"
        mobileImage="/pageHeader/blog-mobile.png"
      />
      <BlogMain />
    </>
  );
}

export default page;
