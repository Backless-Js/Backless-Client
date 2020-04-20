import React, { Component } from 'react';
import SectionHeader from '../component/section-header';
import ContactForm1 from './../component/contact-form1';



// header section content
const title = <h3>Contact Us</h3>;
const alignment = 'section-header text-center pb--60';


class ContactSection extends Component {
    render() {
        return (
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <SectionHeader 
                            title={ title }
                            alignment={alignment}
                        />
                        <div className="contact">
                            <ContactForm1 />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactSection;