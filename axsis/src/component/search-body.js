import React, { Component } from 'react';
import './../css/component/search-body.css';



class SearchBody extends Component {
    CLoseSearchTrigger() {
        document.querySelector('body').classList.remove('search-open');
    }
    render() {
        return (
            <div className="search-body">
                <span onClick={this.CLoseSearchTrigger} className="close-search"></span>
                <form action="#" className="menu-search-form">
                    <input type="text" name="search" placeholder="Write & Hit Enter"/>
                </form>
            </div>
        )
    }
}

export default SearchBody