import React, { Component } from "react";
import PlayStore from "./../component/playstore";
import "./../css/banner.css";
const bannerTitle = "Express REST API Generator";
const bannerDesc =
  "Our goal at Backless Js. is to give developers, teams and orgs all of the tools they need to build and operate web applications, in one simple, powerful & elegant experience. ";

class Banner extends Component {
  render() {
    return (
      <section id="banner" className="banner-section">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-text">
                  <h1>{bannerTitle}</h1>
                  <p>{bannerDesc}</p>
                  <PlayStore />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-image-content d-flex align-items-center justify-content-center justify-content-lg-start">
          <div className="banner-image pr--30 pl--30 pl-lg-0">
            <div className="banner-joint-image">
              <iframe
                title="tutorial.gif"
                src="https://giphy.com/embed/THfD3tKcS9FQL4dQ00"
                width="480"
                height="214"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
