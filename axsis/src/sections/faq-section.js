import React, { Component } from 'react';
import SectionHeader from './../component/section-header';
import Accordion1 from './../component/accordion';

// header section content
const title = <h3 className="mb--20">Want to ask something  from us?</h3>;
const subtitle = <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br />justo. Nullam dictum felis eu pede mollis pretium.</h6>;
const alignment = 'section-header text-center pb--60';

class FaqSection extends Component {
    
    render() {
        return (
            <section id="faq" className="axsis-faq-section pt--50 pb--50">
                <div className="container p-0">
                    <div className="container-sm">
                        <SectionHeader 
                            title={ title } 
                            subtitle={ subtitle }
                            alignment={alignment}
                        />

                        <div className="faq-container">
                            <Accordion1 />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FaqSection;