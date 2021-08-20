import React , { Component } from "react";
import { NavLink } from "react-router-dom";
import headCSS from '../css/composeheader.module.css'

import Avatars from './avatar'
import Balance from '../images/Balance, Wallet, Money,.svg'
import sorte from '../images/Groupe 730.png'
import parametre from '../images/Groupe 3426.svg'
class ComposeHeader3 extends Component{
    render(){    
        return (
                <div className={headCSS.icons3}>   
                    <NavLink to="/user"><Avatars/> </NavLink> 
                    <NavLink to="/wallet"><img src={Balance} alt='Balance' /></NavLink>
                    <NavLink to="/setting"><img src={parametre} alt='parametre'/></NavLink>
                    <NavLink to="/"><img src={sorte} alt='sorte' className="iconlast"/></NavLink>         
                </div>           
        );    
    }
}
export default ComposeHeader3;