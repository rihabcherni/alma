import React , { Component , Fragment} from "react";
import HeaderSimple  from "../communComponent/Simpleheader";

import DocumentCSS from '../css/BecomTutorDocuments.module.css'
import imgcheck from '../images/Groupe 3379.svg'
import imgleft from '../images/Groupe 3565.svg'
import imgright from '../images/Groupe 3566.svg'
import fileimg from '../images/Groupe 3554.svg'

class BecomeTutorExpertise extends Component{
  render(){
    return (   
        <Fragment>
                <HeaderSimple/>
                <main>
                    <div className={DocumentCSS.topTutor}>
                          <ul className={DocumentCSS.ulTutor}>
                          <div className={DocumentCSS.checkimg}>
                            <img src={imgcheck} alt="" style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={DocumentCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Personal information</li>
                          </div>
                          <div className={DocumentCSS.checkimg2}>
                            <img src={imgcheck} alt=""  style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={DocumentCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Background</li>
                          </div>
                          <div className={DocumentCSS.checkimg2}>
                            <img src={imgcheck} alt=""  style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={DocumentCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Field of expertise</li>
                          </div>
                            <li id="act" style={{fontWeight: "600"}} className={DocumentCSS.actTutor}>Documents</li>
                        </ul>
                    </div>
                    <div className={DocumentCSS.containerDoc}> 
                        <div className={DocumentCSS.centerDoc}>
                              <div className={DocumentCSS.leftDoc}>
                                    <img src={imgright} alt="" className={DocumentCSS.imgDoc}/>
                                  <div  className={DocumentCSS.textDoc}>
                                          <p className={DocumentCSS.p1Doc}>Please upload your most recent degree, diploma, certificate of schooling or transcript.<br/> They must justify the selected fields of expertise</p>
                                          <br/>
                                          <p className={DocumentCSS.p2Doc}>At least one file must be added. You can attach several files.</p>
                                  </div>

                                  <div className={DocumentCSS.insertDoc}>
                                          <img src={fileimg} alt="file img"/>
                                          <br/><br/>
                                          <p className={DocumentCSS.insertp}>Jpg, png or pdf, does not exceed 10 MB You can add up to 10 files</p>
                                          <button className={DocumentCSS.insertbutton}>Insert a file</button>
                                  </div>
                                   
                              </div>
                              
                              <div className={DocumentCSS.rightDoc}>
                                <img src={imgleft} alt=""  className={DocumentCSS.imgDoc}/>
                                <div  className={DocumentCSS.textDoc}>
                                        <p className={DocumentCSS.p1Doc}>Identity verification <br/>Please upload a photo of your ID</p>
                                        <br/>
                                        <p className={DocumentCSS.p2Doc}>Documents we accept: Passport, Drivers license, Residency permit, ID card</p>
                                </div>
                                
                                <div className={DocumentCSS.insertDoc}>
                                          <img src={fileimg} alt="file img"/>
                                          <br/><br/>
                                          <p className={DocumentCSS.insertp}>Jpg, png or pdf, does not exceed 10 MB You can add up to 10 files</p>
                                          <button className={DocumentCSS.insertbutton}>Insert a file</button>
                                  </div>
                          </div>
                        </div>
                        <div className={DocumentCSS.bottomDoc}>
                          <a href="/BecomeTutorExpertise"><button className={DocumentCSS.buttonDoc1}>BACK</button></a>
                          <a href="/BecomeTutor-Document-Ajouter"><button className={DocumentCSS.buttonDoc2}>CONFIRM</button></a>
                    </div> 
                    </div>
            </main>
          </Fragment>
     );
}
}
export default BecomeTutorExpertise;