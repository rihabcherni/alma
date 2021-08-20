import React , { Component} from "react";
import ComposeHeader from "./communComponent/composeheader";
import avatar from '../component/images/2251.jpg'
import Avatar from '@material-ui/core/Avatar';
import profileCss from '../component/css/profile.module.css'
import Language from "./communComponent/select/lang";

class ProfileSimpleUser extends Component{
    render(){  
     return (       
      <>
          < ComposeHeader/>
          <hr/>
            <div style={{textAlign:'center'}}>
                <p className={profileCss.profileTitle}>Profile settings</p>
                <div style={{marginLeft:'46.1%', width:'500px'}}>
                     <Avatar alt="" src={avatar} style={{width:'100px', height:"100px"}}/>  
                </div>
                
                <p className={profileCss.edit}>Edit</p>
            </div>
            <div className={profileCss.mainprofile}>
                <div className={profileCss.maincenter}>
                   <p className={profileCss.soustitle}>Personal information</p>
                   <br/><hr/>
                   <div style={{display:'grid', gridTemplateColumns:'repeat(2 , 50%)'}} className={profileCss.formprofile}>
                        <div> 
                              <p>Name*</p>
                              <input type="text" name="name" id="name" className={profileCss.inputtextboth} />
                              <p>Username*</p>
                              <input type="text"  name="username" id="username" className={profileCss.inputtextboth}/>
                              <br/>
                              <select>
                                  <option>Language</option> 
                                  <option value="Ar">Ar</option>
                                  <option value="Fr">Fr</option>
                                  <option value="En">En</option>
                                  <option value="Sp">Sp</option>
                              </select>        
                        </div>
                       
                        <div>
                              <p>Surname*</p>
                              <input type="text" name="Surname" id="Surname" className={profileCss.inputtextboth} />
                              <br/>
                              <select>
                                  <option>Countery</option>                                   
                              </select>
                              <br/>  
                              <select>
                                  <option>School</option> 
                              </select>  
                        </div>
                      
                   </div>
                        <div className={profileCss.buttonProfile}>
                            <button type='reset'>Cancel</button> 
                            <button type='submit'>Save</button>
                        </div>  
                        <br/><br/><hr/><br/>
                        <div className={profileCss.formprofile}>
                         <div style={{display:'grid', gridTemplateColumns:'60% 30%',gap:'25%'}}>
                             <div style={{display:'flex', flexDirection:'column'}}>
                               <p>E-mail*</p>
                               <input type="text"  name="username" id="username" className={profileCss.inputtextboth}/>
                             </div>
                             <button className={profileCss.editbutton}>Edit</button> 
                         </div>
                          
                         <div style={{display:'grid', gridTemplateColumns:'50% 30%',gap:'35%'}}> 
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <p>Password*</p>
                                    <input type="password"  name="password" id="password" className={profileCss.inputtextboth}/>
                                </div>
                                <button className={profileCss.editbutton}>Edit</button><br/>
                        </div>
                 </div>

                </div>
              
            </div>
                

      </>
      );
    };
}
export default ProfileSimpleUser;