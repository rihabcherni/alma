import React , { Component ,Fragment} from "react";
import HomeCSS from "../css/home.module.css"
import Request from "./request" 
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import almisicon  from '../images/almaIcon2.2229a18e.svg'
import arrowimg from "../images/arrow.11d1fdff.svg";
import imgreq from '../images/makeReqImg.7548c017.svg'
import headCSS from '../css/composeheader.module.css'
import search from '../images/Tracé 477.png'
import { Link, NavLink } from "react-router-dom";
import ComposeHeader1 from '../communComponent/compHeader1'
import ComposeHeader2 from '../communComponent/compHeader2'

class Accueil extends Component{
  render(){
    return (   
        <Fragment>
              <div className={HomeCSS.leftsection}>
              <nav className={headCSS.navcompheader} style={{marginLeft:'-15px'}}> <ComposeHeader1/></nav>
                      <div className={HomeCSS.fieldsscroll}>
                      <Request/><Request/><Request/><Request/><Request/>
                      </div>
                      </div>
                      <div className={HomeCSS.centersection}>
              <nav  className={headCSS.navcompheader} style={{display:"grid", justifyContent:"space-around",marginTop:'15px'}}>
                       <img src={search} alt='search' style={{margin:'5px 15px'}}/>
                      <div  style={{postion:'relative',Top:'-20px'}}>
                            <ComposeHeader2/>
                      </div>               
              </nav>
                  
                     <div className={HomeCSS.balancecontainer}> 
                       <div className={HomeCSS.balance}>
                            <p className={HomeCSS.balancep}>My Balance</p>
                            <p className={HomeCSS.balanceprice}> 0 <img src={almisicon} alt="" style={{width:"20px"}}/></p>
                        </div>
                        <div>
                           <Link to='/packs'>
                                <Fab size="large" aria-label="add"  className={HomeCSS.addicon}>
                                      <AddIcon />
                                </Fab>
                           </Link> 
                            </div>
                    </div>
                    <div className={HomeCSS.makerequest}>
                          <a href="/Make-request" className={HomeCSS.linkrequest}> 
                                    Make<br/> A request
                                    <img src={arrowimg} alt=""/>
                               
                           
                                <p className={HomeCSS.p2req}>
                                Alma can help you to solve problems or to improve your essays and reports. All you need to do is to follow some easy steps!
                                </p>
                          </a>                                
                        <img src={imgreq} alt="" className={HomeCSS.imgreq} style={{marginTop:'-20px'}} />

                    </div>
              </div>
           </Fragment>
    );
  };
}
export default Accueil ;