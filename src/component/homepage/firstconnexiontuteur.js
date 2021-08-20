import React , { Component ,Fragment} from "react";
import HomefirstconnexionCSS from "../css/home.module.css"
import msgimg from '../images/Groupe 3521.svg'

import ReactStars from "react-rating-stars-component";
import  ComposeHeader3  from '../communComponent/compHeader3';
import headCSS from '../css/composeheader.module.css'
import { BadgeAvatars  } from "../communComponent/avatar";
class HomefirstconnexionTuteur extends Component{
  render(){
    return (   
        <Fragment>
             <br/>
             <nav className={headCSS.navcompheader}>  <ComposeHeader3/></nav>
                
               <BadgeAvatars/>
            
             <p className={HomefirstconnexionCSS.avatp}>Mon pseudo</p>
             <p className={HomefirstconnexionCSS.degree}>2nd year of Bachelor</p>
             <p className={HomefirstconnexionCSS.university}>The Faculty of Business And Economics Of The university of Lausanne</p>
            <div className={HomefirstconnexionCSS.fieldsBackground}>
                <div className={HomefirstconnexionCSS.fieldsBackgrounddiv}>Mathématiques</div>
                <div className={HomefirstconnexionCSS.fieldsBackgrounddiv}>Management</div>
                <div className={HomefirstconnexionCSS.fieldsBackgrounddiv}>Phylosophie</div>
            </div>
          
             <div className={HomefirstconnexionCSS.grade}>

             </div>

             <div className={HomefirstconnexionCSS.grade2}>
                 <div className={HomefirstconnexionCSS.grade2p}>
                      <p>Methodology</p> 
                      <p>Availability</p>
                      <p>Clarity</p>
                      <p>Accuracy</p>
                 </div>
                 <div>
                      <ReactStars size={26} isHalf={true}/>
                      <ReactStars size={26} isHalf={true}/>
                      <ReactStars size={26} isHalf={true}/>
                      <ReactStars size={26} isHalf={true}/>
                 </div>
             </div>
             <div className={HomefirstconnexionCSS.comments}>
                  <img src={msgimg} alt=""/>
                  <p className={HomefirstconnexionCSS.commentsp1}>Comments</p>
                  <p className={HomefirstconnexionCSS.commentsp2}>You have no comments for the moment</p>
                  <p className={HomefirstconnexionCSS.commentsp3}>+ Answer a question</p>
             </div>
        </Fragment>
    );
  };
}
export default HomefirstconnexionTuteur ;