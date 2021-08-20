import React , { Component} from "react";
import img1 from "../images/Tracé 477.png"
import img2 from "../images//Groupe 3744.png"
import btn2 from "../images/Groupe 3763.png"
import btn1 from "../images/Ellipse 65.png"

import Slide3CSS from'../css/HOMEPAGE_SLIDE3.module.css'
import HeaderSimple  from "../communComponent/Simpleheader";


class Slide3 extends Component{
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
         <div className={Slide3CSS.S3}>
                  <main className={Slide3CSS.mainS3}>
                        <div className={Slide3CSS.s3top}>
                            <h1 className={Slide3CSS.h1S3}>Marketplace</h1><br/>
                            <p className={Slide3CSS.paragS3} ><b>Buy</b> ana academic document or<b> sell</b> your own work infinitely!</p>
                        </div>
                        <div className={Slide3CSS.s3warapper}>
                                <div className={Slide3CSS.s3div1}>
                                    <p className={Slide3CSS.p1S3}>Are you in lack of inspiration for a task to be done?</p>
                                    <p className={Slide3CSS.p2S3}><b>Find the ​ideal material among an unlimited number of proposals!</b></p><br/><br/>
                                    <p className={Slide3CSS.p3S3}><b>What are you looking for?</b></p> 
                                    <div className={Slide3CSS.rectangleS3}><img src={img1} alt="img1" className={Slide3CSS.img1S3}/><span className={Slide3CSS.spanS3}>Type any subject</span> </div>
                               
                                    <button className={Slide3CSS.btn1S3}>SEARCH</button>
                                </div>
                                <div className={Slide3CSS.s3div2}>
                                    <img src={img2} alt='imgslide3' className={Slide3CSS.imgS3}/>
                                </div>
                                <div className={Slide3CSS.s3div3}>
                                    <p className={Slide3CSS.p4S3}>You are a<b>​ tutor</b> and have already answered a question?<br/><br/>
                                    
                                        You are a <b>​student</b> but you have worked on something you are proud of and would like to share it?<br/><br/></p>
                                    <p class={Slide3CSS.p5S3}><b>Take advantage of the ​marketplace to publish your work and get rewarded for  each sale you make!</b></p>    
                    
                                    <button className={Slide3CSS.btn2S3}><a href="/inscr" style={{color:"white"}}>UPLOAD DOCUMENTS</a></button>  
                                </div>
                        </div>
                </main>

                <div className={Slide3CSS.btnS3}>
                    <ul className={Slide3CSS.btnS3ul}>
                        <li className={Slide3CSS.btnS3li}><a href="/"><img src={btn1} alt='btn' id="btn1" /></a></li>
                        <li className={Slide3CSS.btnS3li}> <a href="Slide2"><img src={btn1} alt='btn' id="btn2"/></a></li>
                        <li className={Slide3CSS.btnS3li}><a href="Slide3"><img src={btn2} alt='btn' id="btn1"/></a></li>
                        <li className={Slide3CSS.btnS3li}><a href="Slide4"><img src={btn1} alt='btn' id="bsvt"/></a></li>
                    </ul>
                </div>
        </div>
    </div>
);    
    }
}

export default Slide3;