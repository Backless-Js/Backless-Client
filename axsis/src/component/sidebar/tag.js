import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../css/component/tag.css';

const tagListContent = [
    {
        tagName: "Mockups",
        tagLink: '/'
    },
    {
        tagName: "Art",
        tagLink: '/'
    },
    {
        tagName: "Icons",
        tagLink: '/'
    },
    {
        tagName: "Prints",
        tagLink: '/'
    },
    {
        tagName: "WordPress",
        tagLink: '/'
    },
    {
        tagName: "UI",
        tagLink: '/'
    },
    {
        tagName: "Joomla",
        tagLink: '/'
    }
    
]
class Tag extends Component {
    render() {
        const tagList = tagListContent.slice(0 , this.props.itemNumber);
        const { tagStyle } = this.props;
        return (
            <ul className={`tag-list list-unstyled ${tagStyle ? tagStyle : ''}`}>
                {tagList.map((val, i) =>(
                    <li key={i}><Link to={val.tagLink}>{val.tagName}</Link></li>
                ))}
            </ul>
        )
    }
}

export default Tag;