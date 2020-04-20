import React, { Component } from 'react';
import { Swiper, Pagination } from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import './../css/component/interface-slider.css';
import 'swiper/css/swiper.css'
const params = {
    // Provide Swiper class as props
    Swiper,
    containerClass: 'interface-slider-container',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    initialSlide: 4,
    keyboardControl: true,
    mousewheelControl: true,
    preventClicks: true,
    preventClicksPropagation: true,
    centeredSlides: true,
    // Add modules you need
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
        990: {
            slidesPerView: 5,
            spaceBetween: 0
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
  }

  const infterFaceSliderList = [
    {
        imagUrl: "assets/images/interface-slider/01.jpg",
        imageAlt: 'screenshot1'
    },
    {
        imagUrl: "assets/images/interface-slider/02.jpg",
        imageAlt: 'screenshot2'
    },
    {
        imagUrl: "assets/images/interface-slider/03.jpg",
        imageAlt: 'screenshot3'
    },
    {
        imagUrl: "assets/images/interface-slider/04.jpg",
        imageAlt: 'screenshot4'
    },
    {
        imagUrl: "assets/images/interface-slider/05.jpg",
        imageAlt: 'screenshot5'
    },
    {
        imagUrl: "assets/images/interface-slider/06.jpg",
        imageAlt: 'screenshot6'
    }
]

class InterfaceSlider extends Component {
    
    render() {
        return (
            <ReactIdSwiperCustom {...params}>
                {infterFaceSliderList.map((val , i) => (
                    <div className="swiper-slide" key={i}>
                        <img
                            src={`${val.imagUrl}`} 
                            alt={`${val.imageAlt}`}
                         />
                    </div>
                ))}
            </ReactIdSwiperCustom>
        )
    }
}

export default InterfaceSlider;