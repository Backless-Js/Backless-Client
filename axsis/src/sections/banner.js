import React, { Component } from 'react';
import PlayStore from './../component/playstore';
import './../css/banner.css';
const bannerTitle = 'Instant REST API.';
const bannerDesc = "Instant REST API server using ODM Mongoose for MongoDB, Express for server's framework, bcryptJs for hashing password, Jsonwebtoken for Authentication, Mocha test framework, Chai as assertion library for test framework.";


class Banner extends Component {
    render() {
        return (
            <section id='banner' className="banner-section">
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
                            <img className="" src="assets/images/Logo5.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;