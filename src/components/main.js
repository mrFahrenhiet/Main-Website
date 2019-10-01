import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import Home from './home';
import About from './aboutUs';
import Blogs from './blogs';
import Contact from './contactUs';
import Gallery from './gallery';
import Socities from './socities';
import Teams from './teams';


export default class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Router>
                    <div className="header">
                        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent nv" id="big">
                                <Link to='/' className="navbar-brand text-light"><img src={require("../views/logo-light.png")} style={{width:"40px", height:"40px"}}/> DTU Times</Link>
                                <Link to="/" className="nav-link text-light">Home</Link>
                                <Link to="/about/" className="nav-link text-light">About</Link>
                                <Link to="/blogs/" className="nav-link text-light">Blogs</Link>
                                <Link to="/contact/" className="nav-link text-light">Contact</Link>
                                <Link to="/teams/" className="nav-link text-light">Teams</Link>
                                <Link to="/socities/" className="nav-link text-light">Socities</Link>
                                <Link to="/gallery/" className="nav-link text-light">Gallery</Link>
                        </nav>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about/' component={About}/>
                            <Route path='/blogs/' component={Blogs}/>
                            <Route path= '/contact/' component={Contact}/>
                            <Route path= '/teams/' component={Teams}/>
                            <Route path= '/socities/' component={Socities}/>
                            <Route path= '/gallery/' component={Gallery}/>
                        </Switch>
                    </div>
                </Router>
                <div className="footer">
                    <p>Footer Here</p>
                </div>
            </div>
        )
    }

}
