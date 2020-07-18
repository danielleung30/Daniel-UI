import React, { Component } from 'react'

import clsx from 'clsx';
import  "./NavBar.css";
import logo from "../../asset/img/logo.svg";
import MenuItem from './MenuItem';
const initState = {
    menu_open:false,
    is_fixed:true,
    menu_item:[
        {
            link:"/about",
            item_name:"About",
            submenu:[]
        },
        {
            link:"/Service",
            item_name:"Service",
            submenu:[
                {
                    link:"/web",
                    item_name:"Web",
                },
                {
                    link:"/app",
                    item_name:"App",
                },
                {
                    link:"/marketing",
                    item_name:"Marketing",
                },
            ]
        },
        {
            link:"/contact",
            item_name:"Contact",
            submenu:[]
        },
        {
            link:"/more",
            item_name:"More",
            submenu:[]
        },
    ]
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
                        {this.state.menu_item.map((item)=>(
                            <MenuItem link={item.link} item_name={item.item_name} submenu={item.submenu}/>
                        ))}
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
