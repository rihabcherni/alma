import React , { Component, } from "react";
import price from '../images/Groupe 3400.svg'                       
import stopwatch from '../images/stopwatch (2).svg'
import avatarUser from '../images/avatarUser.ceee5940.svg'

import DRCSS  from  '../css/details_demande.module.css'

class DetailsDemandeResolueLeft  extends Component{
    render(){  
        return (
            
                <>
                    <div className={DRCSS.avatarDet}>
                    <img src={avatarUser} alt="" />
                    </div>
                    <div className={DRCSS.col2Det}>
                    <div className={DRCSS.col2pDet}>
                        <p>Mangement</p>
                        <p>30 octobre 2020</p> <br/>
                    </div>
                        
                        <div className={DRCSS.spanDet}>
                            <span> <img src={stopwatch} alt=""/> 2j 4h</span>
                            <span> <img src={price} alt="" /> 5 - 10 chf</span>
                            <span className={DRCSS.langDet}>Fr</span> 
                        </div>
                        <br/>
                        <p className={DRCSS.questionDet}>Le manageur: quel rôle, quelle activité? </p><br/>
                        <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p><br/>
                        <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p>
                        <br/><br/>
                        <hr/>
                        <br/>
                        <p className={DRCSS.questDet}>What are you expecting from the tutor ? </p><br/>
                        <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                    </div>
                    <div className={DRCSS.col3Det}>
                        <figure>
                            <img src="" alt="imgages pdf"/>
                            <figcaption>img.pdf</figcaption>
                        </figure>             
                    </div>
                </>  
                              
         
            );
      };
}

export default DetailsDemandeResolueLeft;