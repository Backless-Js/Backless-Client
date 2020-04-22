import React, { Component } from 'react';
import PlayStore from './../component/playstore';
import { Link } from 'react-router-dom'; 
import './../css/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top pt_sm--30 pb--10 pb_lg--20">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                                    <Link to="/" className="footer-logo">
                                        <img
                                            src="assets/images/Cropped.png"
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pl-lg-5">
                                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                                    <h5 className="footer-title">Docs</h5>
                                    <ul className="list-ustyled pl-0 pb-0 list-unstyled">
                                        <li><a href="/blog-list-left-sidebar/#quick-demo">Quick Demo</a></li>
                                        <li><a href="/blog-list-left-sidebar/#prerequisites">Prerequisites</a></li>
                                        <li><a href="/blog-list-left-sidebar/#installation">Installation</a></li>
                                        <li><a href="/blog-list-left-sidebar/#help">Help</a></li>
                                        <li><a href="/blog-list-left-sidebar/#usage">Usage</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget text-center text-lg-left mb--30 mb-lg-0">
                                    <h5 className="footer-title">Channel</h5>
                                    <PlayStore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>&copy;  Copyrights 2020 Backless Js All rights reserved.</p>
                            <p>Made by Backless Js Team</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;