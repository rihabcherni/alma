import React , { Component } from "react";
import headCSS from '../css/composeheader.module.css'
import ComposeHeader1 from './compHeader1'
import ComposeHeader2 from './compHeader2'
import { NavLink } from "react-router-dom";

import Avatars from './avatar'
import Balance from '../images/Balance, Wallet, Money,.svg'
import sorte from '../images/Groupe 730.png'
import parametre from '../images/Groupe 3426.svg'
class ComposeHeader extends Component{
    render(){    
        return (
        <header style={{marginTop:'20px'}}>
            <nav id="myTopnav" className={headCSS.navcompheader}>  
                  <ComposeHeader1/>
                <div style={{marginTop:'15px', position:'relative', left:'180px'}}>
                     <ComposeHeader2 /> 
                </div>
                <div className={headCSS.icons3}>   
                    <NavLink to="/user"><Avatars/> </NavLink> 
                    <NavLink to="/wallet"><img src={Balance} alt='Balance' /></NavLink>
                    <NavLink to="/setting"><img src={parametre} alt='parametre'/></NavLink>
                    <NavLink to="/"><img src={sorte} alt='sorte' className="iconlast"/></NavLink>         
                </div>   
            </nav>
        </header>
        );    
    }
}
export default ComposeHeader;