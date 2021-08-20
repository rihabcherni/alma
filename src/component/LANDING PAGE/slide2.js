import React , { Component} from "react";
import img1 from "../images/Groupe 3759.png"
import img2 from "../images/Groupe 3760.png"
import btn2 from "../images/Groupe 3763.png"
import btn1 from "../images/Ellipse 65.png"
import img3 from "../images/Groupe 3761.png"
import img4 from "../images/Groupe 3762.png"

import Slide2CSS from '../css/HOMEPAGE_SLIDE2.module.css'
import HeaderSimple  from "../communComponent/Simpleheader";

class Slide2 extends Component{
    render(){  
        window.onload= function(){
            var mybutton= document.getElementById('bsvt');
            setTimeout(function(){
                mybutton.click();
            },4000);
        }   
        return (
        <div>
            <HeaderSimple/>
            <div className={Slide2CSS.S2}>
                    <main className={Slide2CSS.mainS2}>
                        <div className={Slide2CSS.topS2}>
                                <h1 className={Slide2CSS.titleS2}>How does it work?</h1>
                                <p className={Slide2CSS.paragS2}>All you need to do it to follow <b>3 simples steps!</b></p>  
                            </div>  
                
                            <div className={Slide2CSS.wrapperS2}>
                                <div className={Slide2CSS.div1S2}>
                                    <img src={img1} alt="imgSlide2" className={Slide2CSS.div1Img}/>
                                    <h2 className={Slide2CSS.sousTitle}>Ask your question</h2>
                                    <p className={Slide2CSS.divpS2}>Having trouble understanding a concept or solving a problem? <br/>Make your request: Set up <b>your</b> deadline and indicate <b>your</b> price range!</p>
                                </div>
                               
                                <div className={Slide2CSS.div2S2}>
                                    <img src={img2} alt=""className={Slide2CSS.div2Img}/>
                                    <h2 className={Slide2CSS.sousTitle}>Choose your tutor</h2>
                                    <p className={Slide2CSS.divpS2}>You will rapidly receive differnt answer proposals.<br/> Pick the tutor who suites <b>you</b> best! <br/>All of our tutors are verified.</p>
                                </div> 
                               
                                <div className={Slide2CSS.div3S2}>
                                    <img src={img3} alt="img2Slide2"className={Slide2CSS.div3Img}/>
                                    <h2 className={Slide2CSS.sousTitle}>Get your answer</h2>
                                    <p className={Slide2CSS.divpS2}>Receive your answer within the time frame <b>you</b> specify!<br/> It is comined with <b>continous</b> and <b>quality</b><br/> personalized support throughout the process.</p>
                                </div>
                            </div> 
                            <div className={Slide2CSS.bottomS2}>
                                <button className={Slide2CSS.buttonS2}><a href="/inscr" style={{color:"white"}}>TRY NOW!</a></button>
                                <div>
                                    <img src={img4} alt="" className={Slide2CSS.bottomimgS2}/>
                                    <span className={Slide2CSS.bottomspanS2}> You can pay nothing out of your pocket using the <b>Marketplace</b> to top up your balance!</span>
                                </div>
                            </div>
                    </main>

                    <div className={Slide2CSS.btnS2}>
                        <ul className={Slide2CSS.btnS2ul}>
                                <li className={Slide2CSS.btnS2li}><a href="/"><img src={btn1} alt='btn' id="btn1" /></a></li>
                                <li className={Slide2CSS.btnS2li}> <a href="Slide2"><img src={btn2} alt='btn' id="btn2"/></a></li>
                                <li className={Slide2CSS.btnS2li}><a href="Slide3"><img src={btn1} alt='btn' id="bsvt"/></a></li>
                                <li className={Slide2CSS.btnS2li}><a href="Slide4"><img src={btn1} alt='btn' id="btn1"/></a></li>
                        </ul>
                    </div>
            </div>
    </div>
);    
    }
}

export default Slide2;