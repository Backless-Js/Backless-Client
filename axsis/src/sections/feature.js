import React, { Component } from 'react';
import { FaToolbox, FaClock, FaJs, FaExchangeAlt, FaLockOpen, FaUserCircle } from "react-icons/fa";
import SectionHeader from './../component/section-header';
import './../css/feature.css';

const FeatureList = [
    {
        icon: <FaUserCircle />,
        title: 'Beginner Friendly Interface',
        description: 'Easy to use for beginners web devs who want to build their own server.'
    },
    {
        icon: <FaLockOpen />,
        title: 'Open Source',
        description: 'Free and open source, forever. The entire codebase is available on GitHub.'
    },
    {
        icon: <FaToolbox />,
        title: 'Customizeable',
        description: 'Each project has different requirements. Easily tailor it to your needs.'
    },
    {
        icon: <FaJs />,
        title: '100% Javascript',
        description: 'One language to rule them all. Pure JavaScript everywhere.'
    },
    {
        icon: <FaExchangeAlt />,
        title: 'RESTful API',
        description: 'Classic & reliable way to communicate between applications.'
    },
    {
        icon: <FaClock />,
        title: 'Quick Set-up',
        description: 'Just a few command lines away to build your own server in mere seconds.'
    },
]

// header section content
const title = <h3 className="mb--25">Simple yet packed<br />full of features & functionality.</h3>;
const alignment = 'section-header text-center pb--60';

class Feature extends Component {
    render() {
        return (
            <>
            <div id="feature" style={styles.headerOffset}></div>
            <section className="feature-section pt--60 pb--60 pt_lg--100 pb_lg--100">
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
                                <div className="feature-item text-left mb-4">
                                    <div className="icon-box">
                                        <div className="icon d-flex flex-row justify-content-center align-items-center">
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
            </>
        )
    }
}

const styles = {
    headerOffset: {
      paddingTop: "75px",
      marginTop: "-75px",
    },
  }

export default Feature;