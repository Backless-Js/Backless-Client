import React, { Component } from "react";
// import SearchFormSidebar from "./../component/sidebar/sidebar-search-form";
import Catagory from "./../component/sidebar/catagory";
// import SmallPostTab1 from "./../component/sidebar/small-post/small-post-tab";
// import Tag from "./../component/sidebar/tag";
import "./../css/sidebar.css";

class SmallPostTab extends Component {
  render() {
    return (
      <div className="sidebar-wrapper position-sticky" style={{ top: "125px", marginBottom: "25px" }}>
        <div className="widget">
          <h5 className="widget-title"><span role="img" aria-label="rocket">🚀</span> Getting Started</h5>
          <div className="widget-wrapper">
            <Catagory />
          </div>
        </div>
      </div>
    );
  }
}

export default SmallPostTab;
