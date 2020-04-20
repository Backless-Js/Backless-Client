import React, { Component, Fragment } from 'react';
import Header from './../sections/header';
import PageHeader from './../sections/page-header';
import BlogGrid3Col from './../component/blog/blog-grid-3col';
import Footer from './../sections/footer-section';
import Pagination from './../component/pagination';

class BlogGridFullWidth extends Component {
    render() {
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add(['sticky'], ['animated'], ['slideInDown'])
            }else{
                document.querySelector('.header--fixed').classList.remove(['sticky'], ['animated'], ['slideInDown'])
            }
          });
        return (
            <Fragment>
                <Header headerStyle={'header-style-2'}/>
                <PageHeader title={'Blog List'} />
                <div className="inner-page-section pt--70 pt_lg--130 pb--70 pb_lg-120">
                    <div className="container">
                        <main className="main-content">
                            <BlogGrid3Col itemNumber={6}/>
                            <div className="col-12 pl-0 pr-0">
                                <Pagination />
                            </div>
                        </main>
                    </div>
                </div>
                <Footer></Footer>
            </Fragment> 
        )
    }
}

export default BlogGridFullWidth;