import React from 'react';
import $ from 'jquery';
import Carousel from 'nuka-carousel';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            $('.navbar').removeClass('bg-dark text-light');
            $('.nav-link').removeClass('text-light');
            $('.navbar-brand').removeClass('text-light');
            $('.navbar-brand').addClass('nv2')
            $('.nav-link').addClass('text-light');
            $('.navbar-brand').addClass('text-light');
            $(window).scroll(function() {
              if($(this).scrollTop() > 100) { 
                  $('.navbar').addClass('bg-dark');
                  $('.nav-link').addClass('text-light');
                  $('.navbar-brand').addClass('text-light');
                  $('.navbar-brand').removeClass('nv2');
              } else {
                  $('.navbar').removeClass('bg-dark text-light');
                  $('.navbar-brand').addClass('nv2')
              }
            })
    })
    
}
componentWillUnmount() {
    $(document).ready(function() { 
        $(window).scroll(function() {
          if($(this).scrollTop() < 100) { 
              $('.navbar').addClass('bg-dark');
              $('.nav-link').addClass('text-light');
              $('.navbar-brand').addClass('text-light');
              $('.navbar-brand').removeClass('nv2');
          }
          $('.navbar').addClass('bg-dark');
          $('.nav-link').addClass('text-light');
          $('.navbar-brand').addClass('text-light');
          $('.navbar-brand').removeClass('nv2');
        })
        $('.navbar').addClass('bg-dark');
        $('.nav-link').addClass('text-light');
        $('.navbar-brand').addClass('text-light');
        $('.navbar-brand').removeClass('nv2');
})

}
    render(){
        mixins: [Carousel.ControllerMixin]
        return (
            
            <div className="mainHead">
                <div className="flex1">
                    <br/>
                    <h1 className="mt-6">Background Comming Soon</h1>
                </div>
                <div className="flex2">
                    <h1 style={{textAlign:'center !important', color:'white'}} className="mt-6 text-center ml-41"><span style={{color:"#1abc9c"}}>Latest</span> Editions</h1>
                    <Carousel enableKeyboardControls={true} withoutControls={false} style={{height:'550px'}}   renderCenterLeftControls={({ previousSlide }) => (
                            <button onClick={previousSlide} className="btn"><img src={require('../views/iconSlickleft.png')}/></button>
                        )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} className="btn"><img src={require('../views/iconSlickright.png')}/></button>
                    )}
                    renderBottomCenterControls = {null}>
                        <div className="one">
                        <div className="card1 l">
                        <img src={require('../views/43.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card2 l">
                        <img src={require('../views/42.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card3 l">
                            <img src={require('../views/44.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        </div>
                        <div className="one">
                        <div className="card1 l">
                        <img src={require('../views/34.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card2 l">
                        <img src={require('../views/35.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card3 l">
                            <img src={require('../views/36.jpeg')} style={{width:'250px', height:'350'}} />
                        </div>
                        </div>
                        <div className="one">
                        <div className="card1 l">
                        <img src={require('../views/37.jpeg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card2 l">
                        <img src={require('../views/38.jpeg')} style={{width:'250px', height:'350'}} />
                        </div>
                        <div className="card3 l">
                            <img src={require('../views/39.jpg')} style={{width:'250px', height:'350'}} />
                        </div>
                        
                        </div>
                    </Carousel>
                </div>

                <div className="flex4 mt-6">
                <div className="row" >
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
                </div>
            </div>

        )
    }
}
export default Home