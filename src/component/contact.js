import React , { Component} from "react";
import ComposeHeader from "./communComponent/composeheader";
import { TextField } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import imgContact from './images/contact.PNG'
import {  TextValidator} from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
 
function validationName() 
          {
            let nomP = document.getElementById("NomE"); 
            let verifNom=/^[a-zA-Z- ]+$/;               
                if (!nomP.value.match(verifNom)||nomP.value ===" "||nomP.value ===""||isNaN(nomP.value)===false)                          
                     {
                        document.getElementById("erreurN").innerHTML="Invalid Name"; 
                        document.getElementById("erreurN").style.color="red";
                        document.getElementById('erreurN').style.backgroundColor='white';
                        nomP.style.color = "red"; 
                        nomP.style.border='1px solid red';
                        nomP.focus(); 
                       
                        return false; 
                     }
                 else     
                     {                          
                        return true;    
                     }              
                 }
function validationComment()
           {   
               let comment = document.getElementById("commentaire");      
                   if (comment.value ===""||comment.value.length<60|| comment.value.length>600)
                   {
                      document.getElementById("erreurC").innerHTML="The text field should be between 200 and 500 characters"; 
                      document.getElementById("erreurC").style.color="red";
                      document.getElementById('erreurC').style.backgroundColor='white';
                      comment.style.color = "red";
                      comment.style.border = "1px solid red";
                      comment.focus(); 
                       return false; 
                   }
                   else               
                   {  
                       return true;
                   }
           }
class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
        user: {},
    };
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user }); 
    const email = event.target.value;
    this.setState({ email });
}
  validation()
           {
            if(validationComment()==='false'|| validationName()==='false')
                  {
                      document.getElementById("erreur").innerHTML = "Vos informations sont incorrectes ou encore vide!";
                      document.getElementById("erreur").style.color="red";
                      document.getElementById("erreur").style.fontSize="20px";
                 }
                  }
handleSubmit() {
    document.getElementById('submitcontact').style.backgroundColor='#355b97';
}
  render(){
        const { email } = this.state;
    return ( 
    <>  
       <ComposeHeader/>
        <div style={{backgroundColor:'#F5F5FB', margin:" 20px 38px ",padding:" 50px 75px 18.4px 78px"}}>
           <h1 style={{color:'#02044f', fontFamily:"var(--Fredoka)", fontSize:'50px', fontWeight:'600'}}>Contact US</h1>
          <div style={{display:'grid', gridTemplateColumns:'40% 60%'}}>
           <div style={{textAlign:'center'}}>
           <ValidatorForm 
                onSubmit={this.handleSubmit}   
                ref="form"
                onError={errors => console.log(errors)}>
                <TextField  
                        id="NomE"
                        label="Name*"
                        variant="outlined"
                        style={{width:'96%' , margin:'30px 0 0px ', backgroundColor:"white"}}                     
                 />
               <p id='erreurN' style={{width:'95%', height:'20px',paddingLeft:'10px',textAlign:'left', fontFamily:'var(--Roboto)', fontSize:'12px', marginLeft:"10px"}}></p>
                  <TextValidator
                        variant="outlined"
                        label='E-mail'
                        floatingLabelText="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'Wrong email format']}
                        style={{width:'96%' , margin:'15px 0 10px ', backgroundColor:"white"}}
                  />                 
                 <TextareaAutosize id="commentaire" aria-label="minimum height" placeholder="Message" minRows={7}  style={{ backgroundColor:"white", resize: 'none',width:'96%' , borderRadius :"5px",font:"17px var(--Roboto)",borderColor:"#a39eadad", padding:"20px 15px", margin:'15px 0 0px '}} />          
                 <p id="erreurC" style={{width:'95%', height:'20px',paddingLeft:'10px',textAlign:'left', fontFamily:'var(--Roboto)', fontSize:'12px', marginLeft:"10px"}}></p>
                  <br/>
              <input onClick={this.validation} id="submitcontact" type="submit" value="Send" style={{backgroundColor:'#c3c3c4',marginTop:'-20px',width:"190px", color:'white', fontSize:'18px'}} />

              </ValidatorForm>
            </div> 
           <img src={imgContact} alt='' style={{width:"105%", margin:'-20px 0 0 30px', height:'85%'}}/>
                
          </div>
        </div>
   </> 
     );
}
}

export default Contact;

