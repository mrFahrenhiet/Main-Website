import React from 'react';
import $ from 'jquery';
import Carousel from 'nuka-carousel';
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
                    <h1 className="mt-6">From Home</h1>
                </div>
                <div className="flex2">
                    <h1 style={{textAlign:'center', color:'white'}} className="mt-6"><span style={{color:"#1abc9c"}}>Latest</span> Editions</h1>
                    <Carousel enableKeyboardControls={true} withoutControls={false} style={{height:'600px'}}   renderCenterLeftControls={({ previousSlide }) => (
                            <button onClick={previousSlide} className="btn"><img src={require('../views/iconSlickleft.png')}/></button>
                        )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} className="btn"><img src={require('../views/iconSlickright.png')}/></button>
                    )}
                    renderBottomCenterControls = {null}>
                        <div>
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
                        <div>
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
                        <div>
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
            </div>

        )
    }
}
export default Home