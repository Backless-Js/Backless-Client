import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './../../css/component/catagory.css';

const catagoryList = [
    {
        catagoryName: "Introduction",
        catagoryRef: "#introduction"
    },
    {
        catagoryName: "Quick Demo",
        catagoryRef: "#quick-demo"
    },
    {
        catagoryName: "Prerequisites",
        catagoryRef: "#prerequisites"
    },
    {
        catagoryName: "Installation",
        catagoryRef: "#installation"
    },
    {
        catagoryName: "Help",
        catagoryRef: "#help"
    },
    {
        catagoryName: "Version",
        catagoryRef: "#version"
    },
    {
        catagoryName: "Updating",
        catagoryRef: "#updating"
    },
    {
        catagoryName: "Usage",
        catagoryRef: "#usage"
    },
    {
        catagoryName: "Backless Command Line",
        catagoryRef: "#backless-command"
    },
    {
        catagoryName: "Add Another Model",
        catagoryRef: "#add-another-model"
    },
    {
        catagoryName: "Authentication",
        catagoryRef: "#authentication"
    }

]

class Catagory extends Component {
    render() {
        return (
            <ul className="catagory-list list-unstyled">
                {catagoryList.map((val, i) => (
                    <li key={i}><a className="d-flex align-items-center justify-content-between" href={val.catagoryRef}>
                        <span className="text">{val.catagoryName}</span>
                    </a></li>
                ))}
            </ul>
        )
    }
}

export default Catagory;