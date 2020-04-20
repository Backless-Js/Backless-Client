import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../css/component/catagory.css';

const catagoryList = [
    {
        catagoryName: "Pre-requisite",
    },
    {
        catagoryName: "Installation",
    },
    {
        catagoryName: "Help",
    },
    {
        catagoryName: "Version",
    },
    {
        catagoryName: "Updating",
    },
    {
        catagoryName: "Usage",
    },
    {
        catagoryName: "Authentication",
    }

]

class Catagory extends Component {
    render() {
        return (
            <ul className="catagory-list list-unstyled">
                {catagoryList.map((val, i) => (
                    <li key={i}><a className="d-flex align-items-center justify-content-between" href="#coba">
                        <span className="text">{val.catagoryName}</span>
                    </a></li>
                ))}
            </ul>
        )
    }
}

export default Catagory;