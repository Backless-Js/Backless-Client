import React, { Component } from 'react';
import SectionHeader from '../component/section-header';
import BlogGrid3Col from './../component/blog/blog-grid-3col';


// header section content
const title = <h3 className="mb--20">Our latest News</h3>;
const subtitle = <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br />justo. Nullam dictum felis eu pede mollis pretium.</h6>;
const alignment = 'section-header text-center pb--60';

class BlogSection extends Component {
    render() {
        return (
            <section id="blog" className="blog-section pt--50 pb--40">
                <div className="container">
                    <SectionHeader 
                        title={ title } 
                        subtitle={ subtitle }
                        alignment={alignment}
                    />
                </div>

                <div className="container">
                    <BlogGrid3Col itemNumber={3}/>
                </div>
            </section>
        )
    }
}

export default BlogSection;