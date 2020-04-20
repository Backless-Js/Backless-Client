import React, { Component } from 'react';
import './../css/component/social-media-list.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaTumblr, FaLinkedinIn, FaGooglePlusG, FaRss } from "react-icons/fa";

const SocialIconList = [
    {
        socialIcon: <FaFacebookF />,
        Url: 'https://web.facebook.com'
    },
    {
        socialIcon: <FaTwitter />,
        Url: 'https://twitter.com'
    },
    {
        socialIcon: <FaTumblr />,
        Url: 'https://www.tumblr.com'
    },
    {
        socialIcon: <FaLinkedinIn />,
        Url: 'https://www.linkedin.com'
    },
    {
        socialIcon: <FaGooglePlusG />,
        Url: 'www.google.com'
    },
    {
        socialIcon: <FaRss />,
        Url: 'https://rss.com'
    }
    
]

class SocialMediaList extends Component {
    render() {
        return (
            <ul className="share-list list-unstyled">
                {SocialIconList.map((val, i) => (
                    <li key={i}><Link to={`${val.Url}`}>{val.socialIcon}</Link></li>
                ))}
            </ul> 
        )
    }
}

export default SocialMediaList;