import React , { Component} from "react";

import avatarusers from '../images/avatarUser.ceee5940.svg'
import price from '../images/Groupe 3400.svg'                       
import stopwatch from '../images/stopwatch (2).svg'

import  requestCSS  from '../css/demande1.module.css'
   
class Request  extends Component{
    render(){  
        return (
        <div>
            <div className={requestCSS.rectDem}>
                <div className={requestCSS.col1Dem}>
                    <img src={avatarusers} alt=""/>
                </div>
                <div className={requestCSS.col2Dem}>
                <p>30 octobre 2020</p>
                <p>Le manageur: quel rôle, quelle activité? </p>
                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>

                </div>

                <div className={requestCSS.col3Dem}>
                    <div className={requestCSS.imgcol3Dem}>
                        <img src={price} alt=""/><span className={requestCSS.spanDem}> 5 - 10 €</span>                            
                    </div>
                    <div className={requestCSS.imgcol3Dem}>
                        <img src={stopwatch} alt=""/> <span className={requestCSS.spanDem}> 2j 4h</span>                        
                    </div>
                </div>

                <div className={requestCSS.col5Dem}>   
                    <button className={requestCSS.rectbuttonDem}>Show details</button>
                </div>
                <div className={requestCSS.col6Dem}>
                    <p className={requestCSS.p6Dem}>EN</p>
                </div>
                </div>
            </div>
        );
    };
}
export default Request;