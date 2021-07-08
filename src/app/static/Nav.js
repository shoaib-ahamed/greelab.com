import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './Nav.css'
import Logo from '../../assets/static/Logo.svg'

class Nav extends Component {
    render() {


        return (
            <div className='nav-bg'>
                <div className="nav-border-white">
                    <div className="container">
                        <div className="nav-blue">
                            <Link to='/'>
                                <img src={Logo} alt="Gree Lab"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
