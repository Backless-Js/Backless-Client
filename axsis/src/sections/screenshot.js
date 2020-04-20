import React, { Component } from 'react';
import SectionHeader from './../component/section-header';
import { FaRegListAlt, FaChartLine } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import './../css/screenshot.css';

// section header content const
const title = <h3 className="mb--15">Powerful software, <br/>beautifully designed</h3>;
const subtitle = <h6 className="sub-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h6>;
const alignment = 'section-header text-lg-left pb--40';

// section header 2 content const
const title2 = <h3 className="mb--15">Stunning design <br />powerful user experience </h3>
const subtitle2 = <h6 className="sub-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h6>
const alignment2 = 'section-header text-lg-left pb--20';

// section header 3 content const
const title3 = <h3 className="mb-3">Powerful software,<br /> beautifully designed</h3>
const subtitle3 = <h6 className="sub-title mb--30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </h6>
const alignment3 = 'section-header text-lg-left';

const ssInfoList1 = [
    {
        icon: <FaRegListAlt />,
        title: 'Easy to use',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur'
    },
    {
        icon: <FaChartLine />,
        title: 'Monitor & manage',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
    },
    {
        icon: <AiOutlineThunderbolt />,
        title: 'Stay up to date',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
    },
]

const ssInfoList2 = [
    {
        icon: <FiCheckCircle />,
        description: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
    },
    {
        icon: <FiCheckCircle />,
        description: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.'
    },
    {
        icon: <FiCheckCircle />,
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.'
    },
]

class ScreenShot extends Component {
    render() {
        return (
            <section id="screenshot" className="screenshot-section bg-ash-color pt--60 pb--60 pt_lg--70 pb_lg--70">
                <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
                    <div className="row">
                        <div className="col-lg-5 order-lg-last">
                            <div className="screenshot-content text-center text-lg-left">
                                <SectionHeader 
                                    title={ title } 
                                    subtitle={ subtitle }
                                    alignment={alignment}
                                />

                                <div className="screenshot-info-container-style1 hover-effect-parent1 text-left">
                                    {ssInfoList1.map( (val , i) => (
                                        <div className="screenshot-info-item d-flex flex-wrap" key={i}>
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h6 className="font-weight-bold mb-2 mt-0">{val.title}</h6>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    ))} 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-first pr_lg--100">
                            <div className="screenshot-image image1">
                                <img
                                    src="assets/images/screenshot/screenshot-img1.png" 
                                    alt="screenshot"
                                 />
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="screenshot-content text-center text-lg-left">
                                <SectionHeader 
                                    title={ title2 } 
                                    subtitle={ subtitle2 }
                                    alignment={alignment2}
                                />
                                <div className="screenshot-info-container-style2 text-left">
                                    {ssInfoList2.map( (val , i) => (
                                        <div className="screenshot-info-item-style2 d-flex flex-wrap" key={i}>
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl_lg--100">
                            <div className="screenshot-image image2">
                                <img 
                                    src="assets/images/screenshot/screenshot-img2.png" 
                                    alt="images"
                                />
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="container position-relative pt--30 pb--30 pt_lg--50 pb_lg--50">
                    <div className="row">
                        <div className="col-lg-5 order-lg-last">
                            <div className="screenshot-content style3  text-center text-lg-left">
                                <SectionHeader 
                                    title={ title3 } 
                                    subtitle={ subtitle3 }
                                    alignment={alignment3}
                                />
                                <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur </p>
                                <div className="custom-btn-group">
                                    <a href="/" className="custom-btn mb-2 mb-lg-0 mx-2 ml-lg-0">Get This Now</a>
                                    <a href="/" className="custom-btn mx-2">Free Trial</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-first pr_lg--100">
                            <div className="screenshot-image xl-image">
                                <img 
                                    src="assets/images/screenshot/screenshot-img3.png" 
                                    alt="screenshot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ScreenShot;