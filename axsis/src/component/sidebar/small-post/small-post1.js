import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../../css/component/small-post.css';


const SmallPostListContent = [
    {
        images: "assets/images/small-thumb/01.jpg",
        title: 'thumb Claritas etiam processus equitur'
    },
    {
        images: "assets/images/small-thumb/02.jpg",
        title: 'thumb Claritas etiam processus equitur'
    },
    {
        images: "assets/images/small-thumb/03.jpg",
        title: 'thumb Claritas etiam processus equitur'
    }
]

class SmallPost1 extends Component {
    render() {
        return (
            <div className="small-post-list">
                {SmallPostListContent.map((val, i) => (
                    <div className="post-item d-flex" key={i}>
                        <div className="post-thumb">
                            <Link to="/blog-details"><img 
                                src={`${val.images}`} 
                                alt="thumb"
                            /></Link>
                        </div>
                        <div className="post-content">
                            <Link className="title" to="/blog-details">{val.title}</Link>
                            <ul className="meta-post list-unstyled pl-0 d-flex">
                                <li>
                                    <span className="meta-content">04 February 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default SmallPost1;