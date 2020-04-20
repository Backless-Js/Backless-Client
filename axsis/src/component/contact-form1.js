import React, { Component } from 'react';
import './../css/component/contact.css';

class ContactForm1 extends Component {
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
            <form className="contact-form">
                <div className="row">
                    <div className="col-lg-6 mb--30 mb-lg-0">
                        <input
                            type="text"
                            name="name"
                            id="item01"
                            value={this.state.axName}
                            onChange={(e)=>{this.setState({axName: e.target.value});}}
                            placeholder="Your Name *"
                        />
                        <input
                            type="text"
                            name="email"
                            id="item02"
                            value={this.state.axEmail}
                            onChange={(e)=>{this.setState({axEmail: e.target.value});}}
                            placeholder="Your email *"
                        />
                        <input
                            type="text"
                            name="subject"
                            id="item03"
                            value={this.state.axSubject}
                            onChange={(e)=>{this.setState({axSubject: e.target.value});}}
                            placeholder="Write a Subject"
                        />
                    </div>  
                    <div className="col-lg-6">
                        <textarea
                            type="text"
                            id="item04"
                            name="message"
                            value={this.state.axMassage}
                            onChange={(e)=>{this.setState({axMassage: e.target.value});}}
                            placeholder="Your Message"
                        />
                    </div> 
                    <div className="col-12 text-center pt--50">
                        <button className="submit-btn" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                    </div> 
                </div>
            </form>
        )
    }
}

export default ContactForm1;