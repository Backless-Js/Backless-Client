import React, { Component, Fragment, useEffect, useState } from 'react';
import Header from './../sections/header';
import PageHeader from './../sections/page-header';
import BlogList from './../component/blog/bloglist';
import Footer from './../sections/footer-section';
import Sidebar from './../sections/sidebar';
import Pagination from './../component/pagination';
import ReactMarkdown from 'react-markdown';
import { fetchReadme } from '@varandas/fetch-readme'

const config = {
    username: 'Backless-Js',
    repository: 'Backless-Js',
    branch: 'master',
    readme: 'README.md'
}

function BlogListLeftsidebar() {
    let [readme, setReadme] = useState('')

    useEffect(() => {
        getMarkdown();
    }, [readme])

    const getMarkdown = async () => {
        setReadme(await fetchReadme(config))
        console.log(readme, 'heho?');
        return readme
    }
    window.addEventListener('scroll', function () {
        var value = window.scrollY;
        if (value > 100) {
            document.querySelector('.header--fixed').classList.add(['sticky'], ['animated'], ['slideInDown'])
        } else {
            document.querySelector('.header--fixed').classList.remove(['sticky'], ['animated'], ['slideInDown'])
        }
    });
    console.log(readme, 'APA LO');

    return (
        <Fragment>
            <Header headerStyle={'header-style-2'} />
            <PageHeader title={'Documentation'} />
            <div className="inner-page-section pt--70 pt_lg--130 pb--70 pb_lg-120">
                <div className="container">
                    <div className="row">
                        <main className="col-lg-9 order-lg-last main-content mb--60 mb-lg-0">
                            {/* <BlogList itemNumber={16} /> */}
                            {readme.length &&
                                <ReactMarkdown source={readme} />
                            }
                            <div className="col-12 pl-0 pr-0">
                            </div>
                        </main>
                        <aside className="col-lg-3 sidebar order-lg-first">
                            <Sidebar />
                        </aside>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}
export default BlogListLeftsidebar;