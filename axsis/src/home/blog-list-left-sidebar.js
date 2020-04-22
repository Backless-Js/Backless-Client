import React, { Fragment } from "react";
import Header from "./../sections/header";
import PageHeader from "./../sections/page-header";
import Footer from "./../sections/footer-section";
import Sidebar from "./../sections/sidebar";
import Docs from "../component/blog/docs.js";

function BlogListLeftsidebar() {
  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    if (value > 100) {
      document
        .querySelector(".header--fixed")
        .classList.add(["sticky"], ["animated"], ["slideInDown"]);
    } else {
      document
        .querySelector(".header--fixed")
        .classList.remove(["sticky"], ["animated"], ["slideInDown"]);
    }
  });

  return (
    <Fragment>
      <Header headerStyle={"header-style-2"} />
      <PageHeader title={"Documentation"} />
      <div className="inner-page-section pt--70 pt_lg--130 pb--70 pb_lg-120">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 sidebar order-lg-first">
              <Sidebar />
            </aside>
            <main className="col-lg-9 order-lg-last main-content mb--60 mb-lg-0">
              <Docs />
              <div className="col-12 pl-0 pr-0"></div>
            </main>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
export default BlogListLeftsidebar;
