import React, { Component, Fragment } from 'react';
import './../css/app.css';
import Header from './../sections/header';
import Banner from './../sections/banner';
import Feature from './../sections/feature';
import ScreenShot from './../sections/screenshot';
import VideoSection from './../sections/video-section';
import InterfaceSliderSection from './../sections/interface-slider-section';
import PricingSection from './../sections/pricing-section';
import TestimonialSection from './../sections/testimonial-section';
import FaqSection from './../sections/faq-section';
import BlogSection from '../sections/blog-section';
import ContactSection from '../sections/contact-section';
import Footer from '../sections/footer-section';

class App extends Component {
  render() {
    window.addEventListener('scroll', function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector('.header--fixed').classList.add(['sticky'], ['animated'], ['slideInDown'])
      } else {
        document.querySelector('.header--fixed').classList.remove(['sticky'], ['animated'], ['slideInDown'])
      }
    });
    return (
      <Fragment>
        <div className="App">
          <Header headerStyle={'header-style-1'}></Header>
          <Banner></Banner>
          <Feature></Feature>
          <VideoSection></VideoSection>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default App;