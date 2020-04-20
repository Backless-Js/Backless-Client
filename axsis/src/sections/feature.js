import React, { Component } from 'react';
import { FaToolbox, FaClock, FaJs, FaExchangeAlt, FaLockOpen, FaRegImages, FaUserCircle } from "react-icons/fa";
import SectionHeader from './../component/section-header';
import './../css/feature.css';

const FeatureList = [
    {
        icon: <FaUserCircle />,
        title: 'Beginner Friendly Interface',
        description: 'Easy to use for a beginner programmer who wants to build their own server.'
    },
    {
        icon: <FaLockOpen />,
        title: 'Open Source',
        description: 'Free and open source, forever. The entire codebase is available on GitHub.'
    },
    {
        icon: <FaToolbox />,
        title: 'Customizeable',
        description: 'Each project requires specific requirements. Easily customize the admin panel as well as the API.'
    },
    {
        icon: <FaJs />,
        title: '100% Javascript',
        description: 'One language to rule them all. Use JavaScript everywhere: both for your front-end and your Headless CMS.'
    },
    {
        icon: <FaExchangeAlt />,
        title: 'RESTful API',
        description: 'Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolorAenean massa. Cum sociind'
    },
    {
        icon: <FaClock />,
        title: 'Quick Set-up',
        description: 'Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolorAenean massa. Cum sociind'
    },
]

// header section content
const title = <h3 className="mb--25">A valuable feature is more <br />important to know our apps deep.</h3>;
const alignment = 'section-header text-center pb--60';

class Feature extends Component {
    render() {
        return (
            <section id="feature" className="feature-section pt--60 pb--60 pt_lg--100 pb_lg--100">
                <div className="container">
                    <SectionHeader
                        title={title}
                        alignment={alignment}
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-start">
                        {FeatureList.map((val, i) => (
                            <div className="col-md-6 col-lg-4 mb--30 mb-lg-0" key={i}>
                                <div className="feature-item text-left">
                                    <div className="icon-box">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <img
                                            src="assets/images/feature/feature-dot-shape.png"
                                            alt="dot shape"
                                        />
                                    </div>
                                    <h5>{val.title}</h5>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;