import React, { Component, Fragment, useEffect, useState } from 'react';
import Header from './../sections/header';
import PageHeader from './../sections/page-header';
import BlogList from './../component/blog/bloglist';
import Footer from './../sections/footer-section';
import Sidebar from './../sections/sidebar';
import Pagination from './../component/pagination';
import ReactMarkdown from 'react-markdown';
import { fetchReadme } from '@varandas/fetch-readme'
import Docs from '../component/blog/docs.js';

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
                            {/* {readme.length &&
                                <ReactMarkdown source={readme} />
                            } */}
                            <div className="d-flex flex-row justify-content-center">
                                <img src="../assets/images/Logo5.png" alt="Backless-Js"/>
                            </div>
                            <div className="d-flex flex-row justify-content-center">
                                <a href="https://www.npmjs.com/package/backless">
                                    <img className="m-1" src="https://img.shields.io/npm/v/backless" alt="NPM Link"/>
                                </a>
                                <a href="https://packagephobia.now.sh/result?p=backless">
                                    <img className="m-1" src="https://packagephobia.now.sh/badge?p=backless" alt="PackagePhobia Link"/>
                                </a>
                                <a href="https://npm-stat.com/charts.html?package=backless">
                                    <img className="m-1" src="https://img.shields.io/npm/dm/backless.svg?style=flat-square" alt="NPM Stats"/>
                                </a>
                            </div>

                            <h2 className="mt-5">INSTANT EXPRESS REST API GENERATOR</h2>
                            <hr/>
                            <p className="mt-5">What packages does Backless Js REST API included?</p>
                            <ul>
                                <li className="mb-2">ODM Mongoose for MongoDB</li>
                                <li className="mb-2">Express for server's framework</li>
                                <li className="mb-2">BcryptJs for hashing password</li>
                                <li className="mb-2">Jsonwebtoken for Authentication</li>
                                <li className="mb-2">Mocha test framework</li>
                                <li className="mb-2">Chai as assertion library for test framework </li>
                            </ul>

                            <Docs />
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