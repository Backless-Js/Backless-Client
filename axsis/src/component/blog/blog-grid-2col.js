import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogGridContent from './blog-grid-content';
import './../../css/component/blog.css';
import { FaRegClock, FaRegCommentAlt, FaAngleDoubleRight } from "react-icons/fa";

class BlogGrid2Col extends Component {
    render() {
        const PostList = BlogGridContent.slice(0 , this.props.itemNumber);
        return (
            <div className="row hover-effect-parent4 justify-content-center justify-content-lg-start">
                {PostList.map((val,i) => (
                    <div className="col-md-6 mb--30 mb-lg-0" key={i}>
                        <div className="post-item text-lg-left">
                            <div className="post-thumb">
                                <Link to="/blog-details">
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
                                        <Link to="/" className="meta-link">26 Comments</Link>
                                    </li>
                                </ul>
                                <h5 className="title mb-3"><Link to="/blog-details">{val.title}</Link></h5>
                                <Link to="/blog-details" className="blog-btn">{val.btnText} <FaAngleDoubleRight /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default BlogGrid2Col;