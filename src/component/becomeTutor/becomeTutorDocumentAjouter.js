import React , { Component , Fragment} from "react";
import HeaderSimple  from "../communComponent/Simpleheader";

import DocumentCSS from '../css/BecomTutorDocuments.module.css'
import imgcheck from '../images/Groupe 3379.svg'
import imgAjout from '../images/Groupe 3529.svg'

class BecomeTutorDocumentAjouter extends Component{
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
                          <div className={DocumentCSS.checkimg2}>
                            <img src={imgcheck} alt=""  style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={DocumentCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Documents</li>
                          </div>
                        </ul>
                    </div>
                    <div style={{textAlign:"center" , padding:"3% 0 2%"}}> 
                     <h2 style={{fontFamily: 'var(--Fredoka)', fontSize:'24px', letterSpacing: '0.78px',color:'#02044f',  lineHeight: '2'}}>Your details have been added successfully!</h2>
                    <p style={{fontFamily: 'var(--Roboto)', fontSize: '20px', fontWeight:'500', color:'#02044f'}}>We are studying your profile, you will be notified very soon!</p>
                    <img src={imgAjout} alt="" style={{margin:'4% 0' ,width: '254px' , height: '253px'}}/>
                    <br/>
                    <a href="/"><button style={{fontFamily: 'var(--Roboto)',fontSize: '16px', fontWeight: '500'  ,color: '#fefeff',border:"none",
 width: '187px', height: '50px', padding: '16px 24px 15px 25px',borderRadius: '7px',  backgroundColor:'#355b97'}}>Back to home page</button></a>
                    </div>
            </main>
          </Fragment>
     );
}
}
export default BecomeTutorDocumentAjouter;



