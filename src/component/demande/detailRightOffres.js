import React , { Component} from "react";

import stopwatch from '../images/stopwatch (2).svg'
import price from '../images/Groupe 3400.svg'
import avatar from '../images/avatarUser.ceee5940.svg'

import DRightOffreCSS  from  '../css/detaildemandeoffres.module.css'


class DRightOffre  extends Component{
    render(){  
        return (
        
                <div className={DRightOffreCSS.rightROffres}>
                    <p className={DRightOffreCSS.titleOffres}> My Answer proposals (2) </p>
                    <div className={DRightOffreCSS.rightcontainerOffres}>
                        <div className={DRightOffreCSS.rectOffre}>
                         <div className={DRightOffreCSS.toprect}>
                            <div className={DRightOffreCSS.col1}>
                                <img src={avatar} alt=""/>
                            </div>
                            <div className={DRightOffreCSS.col2}>
                                <p className={DRightOffreCSS.pseudo}>Pseudo</p>
                                 <p className={DRightOffreCSS.date}>30 octobre 2020</p>   

                                <div className={DRightOffreCSS.imgcol}>
                                    <img src={stopwatch}  alt=""/> <span> 2j 4h</span>                        
                                </div>
                                <div className={DRightOffreCSS.imgcol}>
                                    <img src={price} alt="" className={DRightOffreCSS.priceimg}/><span className={DRightOffreCSS.pricespan}> 10 chf</span>                            
                                </div>
                            </div>
                            <div className={DRightOffreCSS.col4}>
                                <button>Decline</button>
                                <button>Accept</button>                                  
                            </div>
                        </div>
                        <div className={DRightOffreCSS.rectpar}>
                            <hr/>
                            <p>Bonjour, je suis disponible pour vitre répondre...</p>
                        </div>
                           
                        </div>
                        <div className={DRightOffreCSS.rectOffre}>
                            <div className={DRightOffreCSS.toprect}>
                               <div className={DRightOffreCSS.col1}>
                                   <img src={avatar} alt=""/>
                               </div>
                               <div className={DRightOffreCSS.col2}>
                                   <p className={DRightOffreCSS.pseudo}>Pseudo</p>
                                    <p className={DRightOffreCSS.date}>30 octobre 2020</p>   
   
                                   <div className={DRightOffreCSS.imgcol}>
                                       <img src={stopwatch} alt=""/> <span> 2j 4h</span>                        
                                   </div>
                                   <div className={DRightOffreCSS.imgcol}>
                                       <img src={price} alt=""  className={DRightOffreCSS.priceimg}/><span className={DRightOffreCSS.pricespan}> 10 chf</span>                            
                                   </div>
                               </div>
                               <div className={DRightOffreCSS.col4}>
                                   <button>Decline</button>
                                   <button>Accept</button>                                  
                               </div>
                           </div>
                        </div>
                    </div>
                    <div className={DRightOffreCSS.btnEncours}>
                                   <button>Modify your request</button>
                                   <button>cancel your request</button>                                  
                    </div>
                </div>
        );
      };
}

export default DRightOffre;

