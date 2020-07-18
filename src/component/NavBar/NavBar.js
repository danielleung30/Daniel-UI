import React, { Component } from 'react'

import clsx from 'clsx';
import  "./NavBar.css";
import logo from "../../asset/img/logo.svg";
const initState = {
    menu_open:false,
    is_fixed:true,

}

export class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = initState;
    }

    handleMenuOpen = ()=>{
        this.setState({
            menu_open:!this.state.menu_open
        })
    }

    render() {
        return (
            
            <div className="menubarContainer">
                <div className="menubarContent">

                    <div className="logoContainer">
                        <img src={logo}/>
                    </div>

                    <div className={clsx('menuList',this.state.menu_open&&'menuOpen')}>
                        <div className="menuItem">About Us</div>
                        <div className="menuItem">Service</div>
                        <div className="menuItem">Function</div>
                        <div className="menuItem">Contact</div>
                        <div className="menuItem">More</div>
                    </div>

                    <div className="burger" onClick={this.handleMenuOpen}>
                        <div className="burger_child"></div>
                        <div className="burger_child"></div>
                        <div className="burger_child"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NavBar
