import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './home/App';
import BlogListRightsidebar from './home/blog-list-rightsidebar';
import BlogListLeftsidebar from './home/blog-list-left-sidebar';
import BlogListFullWidth from './home/blog-list-fullwidth';
import BlogGridFullWidth from './home/blog-grid-fullwidth';
import BlogGridLeftsidebar from './home/blog-grid-left-sidebar';
import BlogGridRightsidebar from './home/blog-grid-right-sidebar';
import BlogDetail from './home/blog-details';
import BlogDetailLeftSidebar from './home/blog-details-left-sidebar'
import BlogDetailFullwidth from './home/blog-details-fullwidth';
import SearchBody from './component/search-body';
import ScrollToTop from './component/scrollTotop';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
  render(){
    return(
      <BrowserRouter>
        <SearchBody />
        <ScrollToTop />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-list-rightsidebar`} component={BlogListRightsidebar}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-list-left-sidebar`} component={BlogListLeftsidebar}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-list-fullwidth`} component={BlogListFullWidth}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-grid-fullwidth`} component={BlogGridFullWidth}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-grid-left-sidebar`} component={BlogGridLeftsidebar}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-grid-right-sidebar`} component={BlogGridRightsidebar}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetail}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} component={BlogDetailLeftSidebar}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-details-fullwidth`} component={BlogDetailFullwidth}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
