import React, { Component } from 'react';
import './../css/component/section-header.css';

class SectionHeader extends Component {
    render() {
        return (
            <div className={ ( this.props.alignment ? this.props.alignment : "") }>
               { this.props.title }
                { this.props.subtitle }
            </div>
        )
    }
}

export default SectionHeader;