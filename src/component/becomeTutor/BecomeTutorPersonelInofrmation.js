import React , { Component , Fragment} from "react";
import HeaderSimple  from "../communComponent/Simpleheader";
import imgTutor from '../images/Groupe 3420.png'
import CountrySelect from '../communComponent/select/country'
import TutorCSS from '../css/Devenir_tuteur.module.css'
import Tags from '../communComponent/select/multipleLanguage'
import PasswordBecomeTutor from '../communComponent/select/password'
import PasswordBecomeConfirme from '../communComponent/select/passwordConfirme'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class BecomeTutorPersonelInofrmation extends Component{
  render(){
    return (   
        <Fragment>  
            <HeaderSimple/>
            <main>
                      <div className={TutorCSS.topTutor}>
                          <ul className={TutorCSS.ulTutor}>
                              <li className={TutorCSS.actTutor}>Personal information</li>
                              <li className={TutorCSS.liTutor}>Background</li>
                              <li className={TutorCSS.liTutor}>Field of expertise</li>
                              <li className={TutorCSS.liTutor}>Documents</li>
                          </ul>
                      </div>
                     <div className={TutorCSS.containerTutor}> 
                        <div className={TutorCSS.centerTutor}>
                                <img src={imgTutor} alt="img" className={TutorCSS.centerTutorimg}/>    
                                <p className={TutorCSS.centerTutorp}>Become a tutor! </p>
                                <p className={TutorCSS.centerTutorp2}>Tell us more about you!</p> 
                          </div>  
                          <form action="" method="POST" className={TutorCSS.centerformTutor}>
                                    <div className={TutorCSS.left}>
                                    <div className={TutorCSS.ligneTutor}>
                                          <TextField id="outlined-basic" label="Name*" variant="outlined" style={{width:'96%' , margin:'8px 0 10px '}}/>
                                          <TextField id="outlined-basic" label="Surname*" variant="outlined" style={{width:'96%' , margin:'8px 0 10px '}}/>
                                    </div>
                                    

                                    <TextField id="outlined-basic" label="Username*" variant="outlined" style={{width:'96%'  , margin:'4px 0 0px'}}/>

                                    <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{width:'96%'  , margin:'10px 0 0'}}/>
                                    <PasswordBecomeTutor/>
                                    <PasswordBecomeConfirme/>

                                    </div>  
                                    <div className={TutorCSS.right}>
                                       <Tags/>
                                      <CountrySelect/>
                                      <TextareaAutosize className={TutorCSS.textarea} aria-label="minimum height" placeholder="Write a few words about your self" minRows={10}  style={{ resize: 'none'}} />                                    
                                    </div>
                          </form>
                          <div className={TutorCSS.bottomTutor}>
                          <a href="/" style={{color:"white"}}><button className={TutorCSS.buttonTutor1}>Cancel</button></a>
                              <a href="/BecomeTutorBackground" style={{color:"white"}}><button className={TutorCSS.buttonTutor2}>Next</button></a>
                          </div>
                  </div>
    
            </main>

        </Fragment>
     );
}
}
export default BecomeTutorPersonelInofrmation;