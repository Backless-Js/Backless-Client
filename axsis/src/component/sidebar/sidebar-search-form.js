import React, { Component } from 'react';
import './../../css/component/searchform-siderbar.css';
import { FaSearch } from "react-icons/fa";

class SearchFormSidebar extends Component {
    render() {
        return (
            <form className="search-form-siderbar">
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search"
                />
                <FaSearch />
            </form>
        )
    }
}

export default SearchFormSidebar;