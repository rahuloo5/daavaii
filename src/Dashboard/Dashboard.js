import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import classes from './Dashboard.modules.css';
import Medicine from '../images/ayuverdic.png'
import Eating from '../images/eating.jpg';
import Exercise from '../images/exercise.jpg';
import Mental from '../images/mental.jpg';
import { Link } from 'react-router-dom';
import { FaCartPlus} from 'react-icons/fa';
import Product from './product';

export default class Dashboard extends Component {
    render() {
        return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light px-sm-5">
            
                <a className="navbar-brand" href="#" >
                    <img src={Medicine} width="60" height="60" className="d-inline-block align-top" alt="" />
                    </a>
                    <ul className = "navbar-nav align-items-center">
                    <li className ="nav-items ml-5">
                    <Link to = "/dashbard" className ="nav-link">
                    <span className = "title"><strong>Dabaai</strong></span>
                        </Link>
                            </li>
                            </ul>
                     <Link to = "/cart" className ="ml-auto">
                        <button background-color="transparent"> <FaCartPlus size= "28px" color ="green"  /> </button> 
                        </Link>       
                
                </nav>
                

                <container>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Eating}  className="d-block w-100" alt="eating"/>
                                <div className="carousel-caption d-none d-md-block">
                                    
                                    <p className="subtitle">Let Food Be Your Medicine!!!</p>
                                </div>
    </div>
                            <div className="carousel-item">
                                <img src={Mental} className="d-block w-100" alt="mental"/>
                                    <div className="carousel-caption d-none d-md-block">
                                       <p className="subtitlew">To Change Your Body, First Change Your Mind </p>
                                    </div>
    </div>
                                <div className="carousel-item">
                                    <img src={Exercise} className="d-block w-100" alt="exercise"/>
                                        <div className="carousel-caption d-none d-md-block">
                                    <p className="subtitle">All truly great thoughts are conceived while walking</p>
                                        </div>
    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>



                </container>
                <Product />
                </>
                
        )
    }
}






