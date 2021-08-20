import React , { Component , Fragment} from "react";
import HeaderSimple  from "../communComponent/Simpleheader";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpertiseCSS from '../css/DEVENIR_TUTEUR_ACTIVITE.module.css'
import imgcheck from '../images/Groupe 3379.svg'
import  MultipleFields from "../communComponent/select/multipleFields";
class BecomeTutorExpertise extends Component{
  render(){
    return (   
        <Fragment>
                <HeaderSimple/>
                <main>
                    <div className={ExpertiseCSS.topTutor}>
                          <ul className={ExpertiseCSS.ulTutor}>
                          <div className={ExpertiseCSS.checkimg}>
                            <img src={imgcheck} alt="" style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={ExpertiseCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Personal information</li>
                          </div>
                          <div className={ExpertiseCSS.checkimg2}>
                            <img src={imgcheck} alt=""  style={{width:"20px" ,position:"relative" ,left:"-10px"}}/>
                            <li className={ExpertiseCSS.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Background</li>
                          </div>
                            <li id="act" style={{fontWeight: "600"}} className={ExpertiseCSS.actTutor}>Field of expertise</li>
                            <li className={ExpertiseCSS.liTutor}>Documents</li>
                        </ul>
                    </div>
                    <div className={ExpertiseCSS.containerTutor}> 
                        <div className={ExpertiseCSS.centerBack}>
                            <p className={ExpertiseCSS.centerbackp}>Indicate your fields of expertise </p>
                            <p className={ExpertiseCSS.centerbackp2}>Specify the subjects in which you want to provide assistance<br/> You can choose up to 5 areas</p> 
                            <form action="" method="POST" className={ExpertiseCSS.formExp}> 
                               <div className={ExpertiseCSS.seleExp}>
                                   <MultipleFields />
                              </div>
                                                                  
                        </form>    
                        <div className={ExpertiseCSS.checkExp}>
                        <FormControlLabel 
                            value="end"
                            control={<Checkbox color="primary" />}
                            style={{color:"#7F7B88"}}
                            labelPlacement="end"
                            label=" I accept the "    
                        />  <span style={{fontFamily:'var(--Roboto)', marginLeft:'-15px'}}><a href="/" className={ExpertiseCSS.Expa}>general terms and conditions</a></span>  
                        </div>  
                        
                    </div>  
                    <div className={ExpertiseCSS.bottomExp}>
                        <a href="/BecomeTutorBackground"><button className={ExpertiseCSS.buttonExp1}>Back</button></a>
                        <a href="/BecomeTutorDocument"><button className={ExpertiseCSS.buttonExp2}>Next</button></a>
                    </div> 
                </div>
              </main> 
        </Fragment>
     );
}
}
export default BecomeTutorExpertise;