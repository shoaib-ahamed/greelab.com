import React, { Component } from "react";

import './Nav.css'
import animationData from '../../assets/static/lottie/lets-talk.json'
import Logo from '../../assets/static/Logo.svg'
import {Link} from "react-router-dom";
import Lottie from "react-lottie";

class MainNav extends Component{

    render() {

        const lottieStyle = {
            width: '24px',
            height: '24px',
            overflow: 'visible',
            margin: '-4px 12px 0 0'
        }

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }

        return(
           <div>
               <div className="nav-border-white">
                   <div className="container">
                       <div className="nav-blue">
                           <div className='logo'>
                               <Link to='/'>
                                   <img src={Logo} alt="Gree Lab"/>
                               </Link>
                           </div>
                           <Link to='/form'>
                               <button className="btn">
                                   <Lottie style={lottieStyle} options={defaultOptions} />
                                   let's talk
                               </button>
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default MainNav
