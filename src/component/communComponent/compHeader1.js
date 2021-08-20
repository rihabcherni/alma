import React , { Component} from "react";
import { NavLink } from "react-router-dom";
import headCSS from '../css/composeheader.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/ic_alma_logo.png'
class ComposeHeader1 extends Component{
    render(){    
        return (
                <> 
                     <MenuIcon style={{ fontSize: 35 }} className={headCSS.burgurMenu}/>
                     <a href="/"><img src={logo} className={headCSS.logo} alt="logo"/></a>
                     <div className={headCSS.nav1}>
                            <NavLink to="/AccueilSimpleUser">Home</NavLink>    
                            <NavLink to="/demandes">Requests</NavLink>
                            <NavLink to="/desktop">Desktop</NavLink>
                            <NavLink to="/marketplace">Marketplace</NavLink>
                            <NavLink to="/Faq"> FAQ</NavLink>
                            <NavLink to="/contact">Contact us</NavLink>
                     </div>         
                </>   
        );    
    }
}
export default ComposeHeader1;