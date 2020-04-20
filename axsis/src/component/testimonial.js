import React, { Component } from 'react';
import { Swiper, Pagination } from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import './../css/component/testimonial.css';
import 'swiper/css/swiper.css';

const testimonialList = [
    {
        imagUrl: "01",
        imageAlt: 'author1',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'John Bordir',
        designation: 'Designer'
    },
    {
        imagUrl: "02",
        imageAlt: 'author2',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'Tomas More',
        designation: 'Developer'
    },
    {
        imagUrl: "03",
        imageAlt: 'author3',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'Kadre John',
        designation: 'Photographer'
    },
    {
        imagUrl: "01",
        imageAlt: 'Nil Johny',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'John Bordir',
        designation: 'Designer'
    },
    {
        imagUrl: "03",
        imageAlt: 'Charl Nelson',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'John Bordir',
        designation: 'Designer'
    },
    {
        imagUrl: "02",
        imageAlt: 'author6',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore etiam processus ',
        name: 'David Clark',
        designation: 'Developer'
    }
]

const params = {
    // Provide Swiper class as props
    Swiper,
    containerClass: 'axsis-testimonial-container',
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    // Add modules you need
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
  }

class Testimonial extends Component {
    render() {
        return (
            <ReactIdSwiperCustom {...params}>
                {testimonialList.map((val , i) => (
                    <div className="swiper-slide" key={i}>
                        <div className="testimonial-body d-flex flex-wrap justify-content-between">
                            <div className="author-image">
                                <img
                                    src={`assets/images/testimonial/${val.imagUrl}.png`} alt={`${val.imageAlt}`}
                                 />
                            </div>
                            <div className="testimonial-content">
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="text">{val.text}</p>
                                <h6 className="name">{val.name}</h6>
                                <p className="designation mb-0">{val.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </ReactIdSwiperCustom>
        )
    }
}

export default Testimonial;