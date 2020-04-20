import React, { Component } from 'react';
import './../css/component/pagination.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

class Pagination extends Component {
    render() {
        return (
            <ul className="pagination justify-content-center justify-content-lg-start">
                <li><Link className='d-flex' to='/'><IoIosArrowBack /> <span className="text">Prev</span></Link></li>
                <li className="d-none d-md-block"><Link className="active" to='/'>1</Link></li>
                <li className="d-none d-md-block"><Link to='/'>2</Link></li>
                <li className="d-none d-md-block"><Link to='/'>3</Link></li>
                <li className="d-none d-md-block"><Link to='/'>4</Link></li>
                <li className="d-none d-md-block"><Link to='/'>5</Link></li>
                <li><Link className='d-flex' to='/'><span className="text">Next</span><IoIosArrowForward /></Link></li>
            </ul>
        )
    }
}

export default Pagination;