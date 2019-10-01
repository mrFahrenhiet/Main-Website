import React from 'react';
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
        return (
            <div className="bg-danger">
                <br/>
                <h1 className="mt-5">From Home</h1>
            </div>
        )
    }
}
export default Home