import React , { Component , Fragment} from "react";
import HeaderSimple  from "../communComponent/Simpleheader";
import BackTutor from '../css/Devenir_tuteur_AJOUTER_FORMATION.module.css'
import removeimg from '../images/removeCircle.c38c0e43.svg'

import imgcheck from '../images/Groupe 3379.svg'
import BackgroundADD from './Backgroundadd'
class BecomeTutorBackground extends Component{
  render(){ 
   
    return (   
        <Fragment>
               <HeaderSimple/>
               <main>
                    <div className={BackTutor.topTutor}>
                          <ul className={BackTutor.ulTutor}>
                          <div className={BackTutor.checkimg}>
                            <img src={imgcheck} alt=""/>
                            <li className={BackTutor.liTutor} style={{color: "#02044F" ,fontWeight: "700"}}>Personal information</li>
                          </div>
                            <li id="act" style={{fontWeight: "600"}} className={BackTutor.actTutor}>Background</li>
                            <li className={BackTutor.liTutor}>Field of expertise</li>
                            <li className={BackTutor.liTutor}>Documents</li>
                        </ul>
                    </div>
                    <div className={BackTutor.containerTutor}> 
                        <div className={BackTutor.centerBack}>
                            <p className={BackTutor.centerbackp}>Indicate your background </p>
                            <p className={BackTutor.centerbackp2}>You can add several qualifications or degrees</p> 
                        </div> 
                        
                      <div style={{display:'grid', gridTemplateColumns:'100% 10%'}}> 
                       <div id="form1" >                        
                          <BackgroundADD/>                          
                        </div>     
                         <img src={removeimg} id='imgremove' alt="remove img" onClick={()=>remove('form2')} style={{marginTop:'80px', display:'none'}}  />
                      </div>


                    <div id="form2" style={{display:'grid', gridTemplateColumns:'100% 10%', gridTemplateRows:'1fr'}}>

                    </div>  
 
                   <p onClick={()=>addform('form2')} style={{fontFamily:'var(--Roboto)', fontSize:'20px', color:'#02044f', fontWeight:'600', textAlign:'center'}}>+add a degree</p>

                        <div className={BackTutor.bottomBack}>
                        <a href="/BecomeTutor"><button className={BackTutor.buttonBack1}>Back</button></a>
                        <a href="/BecomeTutorExpertise"><button className={BackTutor.buttonBack2}>Next</button></a>
                        </div>
                    </div>
                </main>
        </Fragment>
     );
      function addform(){
      var f = document.getElementById('form1')
      var f2 = document.getElementById('form2')
      var cln = f.cloneNode(true);
      f2.appendChild(cln);
      var img = document.getElementById('imgremove');
      img.style.display='block';
      var cln2 = img.cloneNode(true);
      f2.appendChild(cln2);
       document.getElementById('hr').style.visibility='visible';
      }
   function remove() {
       var list = document.getElementById("form2");
       list.removeChild(list.lastChild);
       list.removeChild(list.lastChild);
        }

}
}
export default BecomeTutorBackground;