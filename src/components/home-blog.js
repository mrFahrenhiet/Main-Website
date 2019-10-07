import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const BlogHome = () => {
    
    return (
        <div className="row mt-99">
            <div className="col-md-4" >
                    <div className="blog-card ml-2">
                    <div className="title-content">
                        <h3><Link to="/blogs">Sample Blog 1</Link></h3>
                    </div>
                    <div className="card-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
                        <Link to="/blog">Read Article<span className="licon icon-arr icon-black" /></Link>
                    </div>
                    <div className="utility-info">
                        <ul className="utility-list">
                        <li><span className="licon icon-dat" />03 jun 2017</li>
                        </ul>
                    </div>
                    <div className="gradient-overlay" />
                    <div className="color-overlay" />
                    </div>{/* /.blog-card */}
                    </div>
                    <div className="col-md-4" >
                    <div className="blog-card ml-3 op2">
                    <div className="title-content">
                        <h3><Link to="/blogs">Sample Blog 2</Link></h3>
                    </div>
                    <div className="card-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
                        <Link to="/blog">Read Article<span className="licon icon-arr icon-black" /></Link>
                    </div>
                    <div className="utility-info">
                        <ul className="utility-list">
                        <li><span className="licon icon-dat" />03 jun 2017</li>
                        </ul>
                    </div>
                    <div className="gradient-overlay" />
                    <div className="color-overlay" />
                    </div>{/* /.blog-card */}
                    </div>
                    <div className="col-md-4" >
                    <div className="blog-card ml-4 op3">
                    <div className="title-content">
                        <h3><Link to="/blogs">Sample Blog 3</Link></h3>
                    </div>
                    <div className="card-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
                        <Link to="/blog">Read Article<span className="licon icon-arr icon-black" /></Link>
                    </div>
                    <div className="utility-info">
                        <ul className="utility-list">
                        <li><span className="licon icon-dat" />03 jun 2017</li>
                        </ul>
                    </div>
                    <div className="gradient-overlay" />
                    <div className="color-overlay" />
                    </div>{/* /.blog-card */}
                    </div>
        </div>
    )
}
export default BlogHome;