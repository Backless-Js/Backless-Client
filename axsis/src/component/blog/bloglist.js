import React, { Component, Fragment } from 'react';
import './../../css/component/blog.css';
import { FaRegClock, FaRegUser, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BlogListContent from './blog-list-content';

class BlogList extends Component {
    render() {
        const PostList = BlogListContent.slice(0, this.props.itemNumber + 1);
        return (
            <Fragment>
                {PostList.map((val, i) => (
                    <div className="post-item mb--70" key={i}>
                        <div className="">
                            <img src={`${val.images}`} alt="thumb" />
                        </div>
                        <div className="post-content">
                            <h5 className="title mb-3">{val.title}</h5>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}

export default BlogList;