import React , { Component ,Fragment} from "react";
import HomefirstconnexionCSS from "../css/home.module.css"
import avatar from '../images/2251.jpg'
import firstrequstimg from '../images/Groupe 3518.svg'
import becomtutorimg from '../images/Groupe 3377.svg'
import arrowimg from "../images/arrow.11d1fdff.svg";
import headCSS from '../css/composeheader.module.css'
import Avatar from '@material-ui/core/Avatar';

import  ComposeHeader3  from '../communComponent/compHeader3';

class Homefirstconnexionusimpleuser extends Component{
  render(){
    return (   
        <Fragment>
          <br/>
                   <nav  className={headCSS.navcompheader}>
                      <ComposeHeader3/>
                    </nav>
             <Avatar alt="Remy Sharp" src={avatar} style={{width:'150px',height:'150px', marginLeft:'23%', marginBottom:'20px'}}/>
            <p className={HomefirstconnexionCSS.avatp}>Mon pseudo</p>
            <hr className={HomefirstconnexionCSS.hrligne}/>
            <div className={HomefirstconnexionCSS.firstrequest}>
                <img src={firstrequstimg} alt=""/>
                <p className={HomefirstconnexionCSS.FirstRequestp}>My requests</p>
                <p className={HomefirstconnexionCSS.FirstRequestp2}>You don’t have any requests For the moment!</p>
                <a href="/Make-request"><button className={HomefirstconnexionCSS.btnrequest} style={{border:'none' , color:'white', fontSize:'18px'}}>+ My first request</button></a>
            </div>
            <div className={HomefirstconnexionCSS.becomertutor}>
                <img src={becomtutorimg} alt=""/>
                <div className={HomefirstconnexionCSS.bec}>
                    <p  className={HomefirstconnexionCSS.becomertutorp}>Become <br/>a tutor</p>
                    <img src={arrowimg} alt="" className={HomefirstconnexionCSS.becimg}/>
                </div>
            </div>
        </Fragment>
     );
  };
}
export default Homefirstconnexionusimpleuser; 




