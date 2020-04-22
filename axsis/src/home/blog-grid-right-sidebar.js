import React, { Component, Fragment } from 'react';
import Header from './../sections/header';
import PageHeader from './../sections/page-header';
import BlogGrid2Col from './../component/blog/blog-grid-2col';
import Footer from './../sections/footer-section';
import Pagination from './../component/pagination';
import Sidebar from './../sections/sidebar';

class BlogGridRightsidebar extends Component {
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
                        <div className="row">
                            <main className="col-lg-9 main-content mb--60 mb-lg-0">
                                <BlogGrid2Col itemNumber={6} />
                                <div className="col-12 pl-0 pr-0">
                                    <Pagination />
                                </div>
                            </main>
                            <aside className="col-lg-3 sidebar">
                                <Sidebar />
                            </aside>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </Fragment> 
        )
    }
}

export default BlogGridRightsidebar;