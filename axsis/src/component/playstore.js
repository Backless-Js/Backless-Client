import React, { Component } from 'react';
import './../css/component/playstore.css';
import { FaNpm, FaGithub, FaBook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

class PlayStore extends Component {

    render() {
        return (
            <div className="play-store">
                <a href="https://www.npmjs.com/package/backless" className="custom-btn d-inline-flex align-items-center"><FaNpm /><p><span>NPM</span></p></a>
                <a href="https://github.com/Backless-Js/Backless-Js" className="custom-btn d-inline-flex align-items-center"><FaGithub /><p><span>Github</span></p></a>
                {/* eslint-disable-next-line */}
                <NavLink to='/blog-list-left-sidebar'><a className="custom-btn d-inline-flex align-items-center"><FaBook /><p><span>Get Started</span></p></a></NavLink>
            </div>
        )
    }
}

export default PlayStore;