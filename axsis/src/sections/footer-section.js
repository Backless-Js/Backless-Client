import React, { Component } from 'react';
import PlayStore from './../component/playstore';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './../css/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top pt--100 pt_sm--120 pb--40 pb_lg--90">
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
                                        <li><Link to="/blog-list-left-sidebar/#pre-requisite">Pre-requisite</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#installation">Installation</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#help">Help</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#version">Version</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#updating">Updating</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#usage">Usage</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#backless-command">Backless Command</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#adding-another-model">Adding Another Model</Link></li>
                                        <li><Link to="/blog-list-left-sidebar/#authentication">Authentication</Link></li>
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
                            <p>&copy;  Copyrights 2020 <Link to="/">Backless</Link> All rights reserved.</p>
                            <p>Made width <span className="ti-heart"></span>by <Link to="/"> Backless</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;