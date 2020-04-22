import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/component/blog.css';
import { FaRegClock, FaRegCommentAlt, FaAngleDoubleRight } from "react-icons/fa";


const BlogContentInfoList = [
    {
        imgUrl: "assets/images/blog/01.jpg",
        imgAlt: 'thumb1',
        title: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit......',
        btnText: 'Read More'
    },
    {
        imgUrl: "assets/images/blog/02.jpg",
        imgAlt: 'thumb2',
        title: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit......',
        btnText: 'Read More'
    },
    {
        imgUrl: "assets/images/blog/03.jpg",
        imgAlt: 'thumb3',
        title: 'Lorem ipsum dolor sit amet, con sectetuer adipiscing elit......',
        btnText: 'Read More'
    }
    
]

class Blog extends Component {
    render() {
        return (
            <div className="row hover-effect-parent4 justify-content-center justify-content-lg-start">
                {BlogContentInfoList.map((val,i) => (
                    <div className="col-md-6 col-lg-4 mb--30 mb-lg-0" key={i}>
                        <div className="post-item text-lg-left">
                            <div className="post-thumb">
                                <Link href="/blog-details">
                                    <img
                                        src={`${val.imgUrl}`} 
                                        alt={`${val.imgAlt}`}
                                     />

                                </Link>
                            </div>
                            <div className="post-content border-effect">
                                <ul className="meta-post list-unstyled pl-0 d-flex justify-content-between">
                                    <li>
                                        <span className="icon"><FaRegClock /></span>
                                        <span className="meta-content">04 February 2020</span>
                                    </li>
                                    <li>
                                        <span className="icon"><FaRegCommentAlt /></span>
                                        <Link href="/" className="meta-link">26 Comments</Link>
                                    </li>
                                </ul>
                                <h5 className="title mb-3"><Link href="/blog-details">{val.title}</Link></h5>
                                <Link href="/blog-details" className="blog-btn">{val.btnText} <FaAngleDoubleRight /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default Blog;