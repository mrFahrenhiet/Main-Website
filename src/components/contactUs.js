import React from 'react';
import $ from 'jquery';

import {GoogleMap, withScriptjs, withGoogleMap,Marker,InfoWindow} from 'react-google-maps'
import { dirname } from 'path';
const Map = () => {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{lat: 28.7506165, lng: 77.1165776}}
            >
            <Marker position={{lat:28.7506165,lng:77.1165776}}/>
        
        </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class Contact extends React.Component {
    componentDidMount(){
        $(document).ready(function (){
            $('.navbar').addClass('bg-dark')
        })
    }
    render() {
        return (
            <div>
                <div style={{width:"80vw",height:"35.75%" }} className="con0 mt-6">
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&callback=initMap`}
                    loadingElement={<div style={{height:"100%"}}/>}
                    containerElement={<div style={{height:"100%"}}/>}
                    mapElement={<div style={{height:"100%"}}/>}
                    className="br">
                    </WrappedMap>
                </div>
                <div className="card mt-5 con1" style={{width: '800px'}}> 
                <div className="card-body">
                        <div>
                            <h1 className="card-title">Contact Us</h1>
                            <hr></hr>
                            <br/>
                            <p className="card-text text-dark">We’d love to hear from you. Talk to us about whatever you like, ask us a question or tell us about something you may be interested in. We are all ears.</p>
                            <div className="info">
                                <div className="card text-white bg-dark mb-3 email" style={{width: '18rem'}}>
                                    <div className="card-header">ICON</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Email Us</h5>
                                        <p className="card-text text-center">dtutimes@dtu.ac.in</p>
                                    </div>
                                </div>

                                <div className="card text-white bg-dark mb-3 fb ml-2" style={{maxWidth: '18rem'}}>
                                    <div className="card-header">ICON</div>
                                    <div className="card-body">
                                        <a href="https://www.facebook.com/dtutimes/?epa=SEARCH_BOX" style={{textDecoration:'none'}}><h5 className="card-title">Follow us on Facebook</h5></a>
                                        <p className="card-text text-center">25K Likes</p>
                                    </div>
                                </div>

                                <div className="card text-white bg-dark mb-3 insta ml-2" style={{maxWidth: '18rem'}}>
                                    <div className="card-header">ICON</div>
                                    <div className="card-body">
                                        <a href="https://www.instagram.com/dtu_times/" style={{textDecoration:'none'}}><h5 className="card-title">Follow us on Instagram</h5></a>
                                        <p className="card-text text-center">5.7K Followers</p>
                                    </div>
                                    </div>
                            </div>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSr4kTcPOfprP59c1-_Z2dIyi45k8s1IwbCzcVKncbYhofXA/viewform?embedded=true" marginHeight={0} marginWidth={0} width={640} height={892} frameBorder={0} className="gform">Loading…</iframe>

                        </div>
                    </div>
                </div>
                </div>
        )
    }
}
