import React , { Component} from "react";
import img1 from "../images/Groupe 3740.png"

import btn2 from "../images/Groupe 3763.png"
import btn1 from "../images/Ellipse 65.png"

import Slide4CSS from '../css/HOMEPAGE_SLIDE4.module.css'
import HeaderSimple  from "../communComponent/Simpleheader";


class Slide4 extends Component{
 
    render(){    
      
        return (
        <div>
            <HeaderSimple/>
            <div className={Slide4CSS.S4}>
                <main className={Slide4CSS.mains4}>
                            <div className={Slide4CSS.warappers4}>
                                <div className={Slide4CSS.lefts4}>
                                    <img src={img1} alt='img1slide4' className={Slide4CSS.imgS4} /> 
                                </div>
                                <div className={Slide4CSS.rights4}>
                                    <p className={Slide4CSS.titles4}>Become a<span className={Slide4CSS.bigs4}> tutor</span> </p>
                                    <h2 className={Slide4CSS.h2s4}>Be your own boss!</h2>
                                    <p class={Slide4CSS.pargs4}>Are you a <b>​student​</b> or an <b>​instructor​?</b><br/>
                                        Kill two birds with one stone by becoming a <b>tutor​!</b><br/><br/>
                                        
                                        Help students through <b>​sharing​</b> your knowledge <b>whenever</b> you want and get <b>​rewarded​</b> at the same time!<br/><br/>
                                        
                                        You can have your earnings used to get help in turn through <b>​microtutoring</b> ​to enrich your knowledge in certain fields.</p>
                                    <button className={Slide4CSS.buttons4}><a href="/BecomeTutor" style={{color:"white"}}>LEARN MORE</a></button>
                                </div> 
                            </div>
                        </main>
                <div class={Slide4CSS.btns4}>
                            <ul className={Slide4CSS.btnS4ul}>
                                <li className={Slide4CSS.btnS4li}><a href="/"><img src={btn1} alt='btn' id="bsvt" /></a></li>
                                <li className={Slide4CSS.btnS4li}> <a href="Slide2"><img src={btn1} alt='btn' id="btn1"/></a></li>
                                <li className={Slide4CSS.btnS4li}><a href="Slide3"><img src={btn1} alt='btn' id="btn1"/></a></li>
                                <li className={Slide4CSS.btnS4li}><a href="Slide4"><img src={btn2} alt='btn' id="btn1"/></a></li>
                            </ul>
                        </div>
            </div>         
        </div>  
);    
    }
}

export default Slide4;