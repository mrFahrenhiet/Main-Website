import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap,Marker,InfoWindow} from 'react-google-maps'
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
    render() {
        return (
            <div className="row">
                <br/>
                <br/>
            <div className="contact row mt-4">
                <div style={{width:"100vw",height:"95.75%" }} className="col-md-6 mt-5">
                    
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyhNmKH8-PNFnKCVDVQK8-DGqs8tszyNE&callback=initMap`}
                    loadingElement={<div style={{height:"100%"}}/>}
                    containerElement={<div style={{height:"100%"}}/>}
                    mapElement={<div style={{height:"100%"}}/>}
                    className="col-md-6">
                    </WrappedMap>
                </div>
                <div className="col-md-6 card mt-5" style={{width: '600px',height:'95%'}}> 
                <div className="card-body">
                        <div>
                            <h1 className="card-title">Contact Us</h1>
                            <hr></hr>
                            <br/>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSr4kTcPOfprP59c1-_Z2dIyi45k8s1IwbCzcVKncbYhofXA/viewform?embedded=true" marginHeight={0} marginWidth={0} width={640} height={892} frameBorder={0}>Loading…</iframe>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
