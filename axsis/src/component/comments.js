import React, { Component } from 'react';
import './../css/component/comments.css';
// import { Link } from 'react-router-dom';

const CommentContentList = [
    {
        AuthorImage: "assets/images/single/comment/01.png",
        AuthorName: 'thumb John Doe',
        PublishDate: 'Posted on January  25, 2020 at 6:57 am',
        Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
        AuthorImage: "assets/images/single/comment/02.png",
        AuthorName: 'thumb John Doe',
        PublishDate: 'Posted on January  25, 2020 at 6:57 am',
        Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
        AuthorImage: "assets/images/single/comment/03.png",
        AuthorName: 'thumb John Doe',
        PublishDate: 'Posted on January  25, 2020 at 6:57 am',
        Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
        AuthorImage: "assets/images/single/comment/01.png",
        AuthorName: 'thumb John Doe',
        PublishDate: 'Posted on January  25, 2020 at 6:57 am',
        Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
]

class CommentList extends Component {
    render() {
        return (
            <div className="comment-list">
                {CommentContentList.map((val,i) => (
                    <div className="comment-item" key={i}>
                        <div className="comment-author d-flex flex-wrap">
                            <div className="author-image">
                                <img src={`${val.AuthorImage}`} alt="comment author" />
                            </div>
                            <div className="author-name-info">
                                <h6 className="name">{val.AuthorName}</h6>
                                <p className="publish-date">{val.PublishDate}</p>
                                <a href="/" className="reply-btn">Reply</a>
                            </div>
                        </div>
                        <div className="comment-content">
                            <p>{val.Content}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CommentList;