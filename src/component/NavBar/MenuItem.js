import React, { Component } from 'react'
import {Link} from "react-router-dom";

import PropTypes from 'prop-types'
import  "./NavBar.css";

export class MenuItem extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        if(this.props.submenu.length<1){
            return (
                
                <div className="menuItem"><Link to={this.props.link}>{this.props.item_name}</Link></div>
                
                )
        }else{
            return (
                <div className="menuItem">{this.props.item_name}
                <div className="subMenu">
                    {this.props.submenu.map((item)=>(
                       <div className="subMenuItem"><Link to={item.link}>{item.item_name}</Link></div> 
                    ))}
                </div>
            </div>
                )
        }

    }
}

export default MenuItem
