import React , { Component, } from "react";
import avatarUser from '../images/avatarUser.ceee5940.svg'
import price from '../images/Groupe 3400.svg'                       
import stopwatch from '../images/stopwatch (2).svg'
import DRCSS  from  '../css/details_demande.module.css'

class DetailsDemandeResolueRight  extends Component{
    render(){  
        return (
        <>

                <div className={DRCSS.rightDet}>
                <div className={DRCSS.ligne1Det}>
                    <p>Answer</p>
                    <img src="" alt="chatIcon"/>
                </div>
                <br/>
                <div className={DRCSS.ligne2Det}>
                <div className={DRCSS.avatar2Det}>
                    <img src={avatarUser} alt=""/>
                </div>
                    <div className={DRCSS.col2RightDet}>
                        <p>Pseudo</p>
                        <p>28 octobre 2020</p><br/>
                        <div className={DRCSS.spanDet}>
                            <span> <img src={stopwatch} alt=""/> 10 min</span>
                            <span> <img src={price} alt=""/> 10 chf</span>
                        </div>
                    </div>
                </div>

                <hr className={DRCSS.rightDethr}/>
                
                <div className={DRCSS.paragDet}>
                    <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p><br/>
                    <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem? Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p>
                    <p className={DRCSS.question2Det}>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p><br/>
                </div>
                    
                <div className={DRCSS.download}>
                    <div className={DRCSS.downloadimg}>
                        <div className={DRCSS.imgPdf}>
                            <img src="" alt="imgPdf"/><figcaption>img.pdf</figcaption>
                        </div>
                        <div className={DRCSS.imgPdf}>
                            <img src="" alt="imgPdf"/><figcaption>img.pdf</figcaption>
                        </div>
                        <div className={DRCSS.imgPdf}>
                            <img src="" alt="imgPdf"/><figcaption>img.pdf</figcaption>
                        </div>
                        <div className={DRCSS.imgPdf}>
                            <img src="" alt="imgPdf"/><figcaption>img.pdf</figcaption>
                        </div>
                    </div>
                
                    <a href="/" className={DRCSS.downloadlink}>Download all</a>
                </div>
                <hr className={DRCSS.hrR}/>
                <div className={DRCSS.btnDet}>
                    <button>Evaluate the answer</button>
                    <button>Report the answer</button>
                </div>
                </div>
            </>
          );
      };
}

export default DetailsDemandeResolueRight;