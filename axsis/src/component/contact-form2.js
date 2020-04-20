import React, { Component } from 'react';
import './../css/component/contact.css';
import { FaUserAlt, FaEnvelope, FaTelegramPlane } from "react-icons/fa";

class ContactForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            axName: '',
            axEmail: '',
            axSubject: '',
            axMassage: '',
        };
    }
    render() {
        return (
            <form action="#" className="respons-contact-form">
                <div className="form-item col-lg-7 p-0">
                    <input
                        type="text"
                        name="name"
                        id="item01"
                        value={this.state.axName}
                        onChange={(e)=>{this.setState({axName: e.target.value});}}
                        placeholder="Your Name *"
                    />
                    <FaUserAlt />
                </div>

                <div className="form-item col-lg-7 p-0">
                    <input
                        type="text"
                        name="email"
                        id="item02"
                        value={this.state.axEmail}
                        onChange={(e)=>{this.setState({axEmail: e.target.value});}}
                        placeholder="Your email *"
                    />
                    <FaEnvelope />
                </div>

                <div className="form-item col-lg-12 p-0">
                    <textarea
                        type="text"
                        id="item04"
                        name="message"
                        value={this.state.axMassage}
                        onChange={(e)=>{this.setState({axMassage: e.target.value});}}
                        placeholder="Your Message"
                    />
                    <FaTelegramPlane />
                </div>
                <button className="submit" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Post Comment</button>
            </form>
        )
    }
}

export default ContactForm2;