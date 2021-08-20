import React , { Component, Fragment} from "react";
import imageS1 from "../images/Groupe 3505.svg"
import btn2 from "../images/Groupe 3763.png"
import btn1 from "../images/Ellipse 65.png"
import  Slide1CSS  from '../css/HOMEPAGE_SLIDE1.module.css'
import HeaderSimple  from "../communComponent/Simpleheader";
class Slide1 extends Component{
    render(){ 
        window.onload= function(){
               var mybutton= document.getElementById('bsvt');
               setTimeout(function(){
                   mybutton.click();
               },3000);
           } 
        return (
        <Fragment>
            <HeaderSimple/>
             <div className={Slide1CSS.S1}>
                <main className={Slide1CSS.mainS1}> 
                        <div  className={Slide1CSS.paragraph}>
                            <div className={Slide1CSS.par}>
                                <h1  className={Slide1CSS.h1s1}> The exchange of </h1>
                                <br/>
                                <span className={Slide1CSS.spans1} >knowldege</span> 
                                <p className={Slide1CSS.ps1}> A solution for every problem. <br/> Discover the joys of <b>microtuturing!</b> <br/>Get help instantly and at any time. </p>
                            </div>
                            
                            <button className={Slide1CSS.thirdbutton}><a href="/inscr">SIGN UP</a> </button>
                        </div>
                        
                        <div className={Slide1CSS.image}> <img src={imageS1} alt="acceuil" /> </div>
                </main>
                    <div className={Slide1CSS.btnS1}>
                        <ul className={Slide1CSS.btnS1ul}>
                            <li className={Slide1CSS.btnS1li}><a href="/"><img src={btn2} alt='btn' /></a></li>
                            <li className={Slide1CSS.btnS1li}> <a href="Slide2"><img src={btn1} alt='btn' id="bsvt"/></a></li>
                            <li className={Slide1CSS.btnS1li}><a href="Slide3"><img src={btn1} alt='btn' id="btn1"/></a></li>
                            <li className={Slide1CSS.btnS1li}><a href="Slide4"><img src={btn1} alt='btn' id="btn1"/></a></li>
                        </ul>
                      
                    </div>
            </div>
                   
        </Fragment>  
);    
    }
}
export default Slide1;