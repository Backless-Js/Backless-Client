import React, { Component } from 'react';
import './../css/page-header.css';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    render() {
        const {title} = this.props;
        return (
            <section className="page-header d-flex align-items-center justify-content-center">
                <div className="page-header-content">
                    <h1>{title}</h1>
                    <ul className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li></li>
                        <li>{title}</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default PageHeader;