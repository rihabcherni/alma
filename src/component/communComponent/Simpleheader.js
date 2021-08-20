import React , { Component} from "react";
import { NavLink } from "react-router-dom";


import SimpleHeaderCSS from '../css/Simpleheader.module.css'

import face from "../images/facebook-9.png"
import insta from "../images/groupe-3541.png"
import  logo  from "../images/ic_alma_logo.png"

class HeaderSimple extends Component{
    render(){    
        return (
    <div className={SimpleHeaderCSS.header}>
         <NavLink to="/" className={SimpleHeaderCSS.icon}>&#9776;</NavLink>  
         <a href="/"><img src={logo} className={SimpleHeaderCSS.logoimg} alt="logo"/></a>
        <div id="myTopnav" className={SimpleHeaderCSS.nav}>
                   <NavLink to="/marketplace" className={SimpleHeaderCSS.a}>Marketplace</NavLink>
                   <NavLink to="/Faq" className={SimpleHeaderCSS.a}>FAQ</NavLink>
                   <NavLink to="/contact" className={SimpleHeaderCSS.a}>Contact us</NavLink>
                   <NavLink to="/BecomeTutor" className={SimpleHeaderCSS.btna} style={{color:"white"}}><button className={SimpleHeaderCSS.firstbutton}>BECOME A TUTOR </button></NavLink>
                   <NavLink to="/inscr" className={SimpleHeaderCSS.btna} style={{color:"white"}}><button className={SimpleHeaderCSS.secondButton}>SIGN IN</button></NavLink> 
                   <a href="https://www.facebook.com" className={SimpleHeaderCSS.social1}><img  src={face} alt="facebook-icon" /> </a>
                   <a href="https://www.instagram.com"className={SimpleHeaderCSS.social2}><img  src={insta} alt="insta-icon"/> </a>    
        </div>
    </div>  
            
    );    
    }
}

export default HeaderSimple;