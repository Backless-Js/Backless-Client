import React, { Component } from 'react';
import Testimonial from './../component/testimonial';
import SectionHeader from './../component/section-header';

// header section content
const title = <h3 className="mb-20">What’s our clients are saying</h3>;
const alignment = 'section-header text-center pb--60';

class TestimonialSection extends Component {
    render() {
        return (
            <section id="testimonial" className="axsis-testimonial-section overflow-hidden pb--50 pt--50">
                <div className="container">
                    <SectionHeader 
                        title={ title }
                        alignment={alignment}
                    />
                </div>
                <div className="container">
                    <Testimonial /> 
                </div>
            </section>
        )
    }
}

export default TestimonialSection;