import React, { Component, Fragment } from 'react';
import Header from './../sections/header';
import PageHeader from './../sections/page-header';
// import BlogList from './../component/blog/bloglist';
import Footer from './../sections/footer-section';
import Sidebar from './../sections/sidebar';
import Tag from './../component/sidebar/tag';
import SocialMediaList from './../component/social-media-list';
import CommentList from './../component/comments';
import ContactForm2 from './../component/contact-form2';
import './../css/blog-details.css';
import { FaRegClock, FaRegUser, FaRegHeart, FaRegCommentAlt } from "react-icons/fa";


class BlogDetail extends Component {
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
                {/* header section */}
                <Header headerStyle={'header-style-2'}/>

                {/* page header section */}
                <PageHeader title={'Blog Details'} />


                {/* blog details innerpage */}
                <div className="inner-page-section pt--70 pt_lg--130 pb--70 pb_lg-120">
                    <div className="container">
                        <div className="row">
                            <main className="col-lg-9 main-content mb--60 mb-lg-0">
                                <div className="entry-wrapper">
                                    <div className="entry-single">
                                        <div className="entry-header">
                                        <img src="assets/images/blog-page/01.jpg" alt="thumb" />
                                        </div>
                                        <div className="entry-content">
                                            <ul className="meta-post list-unstyled pl-0 d-flex">
                                                <li>
                                                    <span className="icon"><FaRegUser /></span>
                                                    <a href="/" className="meta-link">Admin</a>
                                                </li>
                                                <li>
                                                    <span className="icon"><FaRegClock /></span>
                                                    <span className="meta-content">04 February 2020</span>
                                                </li>
                                                <li>
                                                    <span className="icon"><FaRegCommentAlt /></span>
                                                    <a href="/" className="meta-link">26 Comments</a>
                                                </li>
                                                <li>
                                                    <span className="icon"><FaRegHeart /></span>
                                                    <span className="meta-content">8 Likes</span>
                                                </li>
                                            </ul>
                                            <h2 className="title mb-3">Nullam dictum felis eu pede mollis pretium. Integer tincidunt</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.</p>
                                            <p>Claritas est etiam <span>processus dynamicus</span>, qui sequitur mutationem consuetudium lectorum. Mirum est notare </p>
                                            <blockquote>
                                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                                                <span>John Dow <span>Company Name</span></span>
                                            </blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.</p>
                                            <p>Qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.</p>
                                        </div>
                                        
                                        {/* tag area */}
                                        <div className="tag-area">
                                            <h5>Tags:</h5>
                                            <Tag itemNumber={5} />
                                        </div>

                                        {/* share list */}
                                        <div className="share-area">
                                            <h5>Share:</h5>
                                            <SocialMediaList />
                                        </div>
                                        

                                        
                                    </div>

                                    {/* comment section */}
                                    <div className="comment-section pt--70 pb--40">
                                        <h5 className="comment-title mb--30"><FaRegCommentAlt /> 26 Comments</h5>
                                        <CommentList />
                                        
                                    </div>


                                    {/* respons comment */}
                                    <div className="response-comment-section pb--30">
                                        <h5 className="response-commen-title mb--30">Leave A Comments</h5>
                                        <ContactForm2 />
                                    </div>
                                    
                                </div>
                            </main>
                            <aside className="col-lg-3 sidebar">
                                <Sidebar />
                            </aside>
                        </div>
                    </div>
                </div>


                {/* footer section */}
                <Footer></Footer>
            </Fragment>
        )
    }
}

export default BlogDetail;