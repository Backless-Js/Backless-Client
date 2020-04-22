import React, { Component } from 'react';
import SectionHeader from './../component/section-header';
import InterfaceSlider from './../component/interface-slider';
import './../css/component/interface-slider.css';

// header section content
const title = <h3 className="mb--20">A valuable feature is more <br />important to know our apps deep.</h3>;
const subtitle = <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br />justo. Nullam dictum felis eu pede mollis pretium.</h6>;
const alignment = 'section-header text-center pb--60';
class InterfaceSliderSection extends Component {
    render() {
        return (
            <section className="interface-slider-section pt--60 pb--50 pt_lg--120">
                <SectionHeader 
                    title={ title } 
                    subtitle={ subtitle }
                    alignment={alignment}
                />
                <div className="interface-slider">
                    <InterfaceSlider></InterfaceSlider>
                </div>
            </section>
        )
    }
}

export default InterfaceSliderSection;