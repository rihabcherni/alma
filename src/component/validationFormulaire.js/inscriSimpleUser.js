function validationNom() 
          {
            let nomP = document.getElementById("NomE"); 
            let verifNom=/^[a-zA-Z- ]+$/;               
                if (!nomP.value.match(verifNom)||nomP.value ==" "||nomP.value ==""||isNaN(nomP.value)==false)                          
                     {
                        document.getElementById("erreurN").innerHTML="❌"; 
                        document.getElementById("erreurN").style.color="red";
                        nomP.style.color = "red";
                        nomP.style.border = "2px solid red";
                        nomP.focus(); 
                        return false; 
                     }
                 else     
                     {  
                        document.getElementById("erreurN").innerHTML = "✔️";
                        document.getElementById("erreurN").style.color="green";
                        nomP.style.color = "green";
                        nomP.style.border = "2px solid green";                           
                        return true;    
                     }              
                 }
function validationPrenom() 
                 {
                          let P = document.getElementById("Prenom"); 
                          let  verifPrenom=/^[a-zA-Z- ]+$/;                     
                          if (!P.value.match(verifPrenom)||P.value ==" "||P.value ==""||isNaN(P.value)==false)                        
                                        {
                                           document.getElementById("erreurPR").innerHTML="❌ "; 
                                           document.getElementById("erreurPR").style.color="red";
                                           P.style.color = "red";
                                           P.style.border = "2px solid red";
                                           P.focus(); 
                                            return false; 
                                        }
                                 else     
                                        {  
                                            document.getElementById("erreurPR").innerHTML = "✔️";
                                            document.getElementById("erreurPR").style.color="green";
                                            P.style.color = "green";
                                            P.style.border = "2px solid green";                                  
                                            return true;    
                                        }              
                        }
function validationEmail() 
               {
                   let email = document.getElementById("email");     
                   let verifEmail= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
                   
                   if (!email.value.match(verifEmail)||email.value ==" "||email.value ==""||isNaN(email.value)==false)                          
                                     {
                                         document.getElementById("erreurE").innerHTML="❌"; 
                                         document.getElementById("erreurE").style.color="red";
                                         email.style.color = "red";
                                         email.style.border = "2px solid red";
                                         email.focus(); 
                                          return false; 
                                     }
                         else               
                                     {  
                                         document.getElementById("erreurE").innerHTML = "✔️";
                                         document.getElementById("erreurE").style.color="green";
                                         email.style.color = "green";
                                         email.style.border = "3px solid green";
                                         return true;
                                     }                
                     }       
 function validationPhone()
                   {
                     let phone = document.getElementById("phone");
                     let  verifPhone=/^[0-9]+$/;
                     if (!(phone.value.match(verifPhone)||phone.value == ""||phone.value == " "))                   
                       { 
                          document.getElementById("erreurPh").innerHTML="❌"; 
                          document.getElementById("erreurPh").style.color="red";
                          phone.style.color = "red";
                          phone.style.border = "2px solid red";
                          phone.focus(); 
                           return false; 
                       }
                else if (phone.value.length==8)    
                       {  
                           document.getElementById("erreurPh").innerHTML = "✔️";
                           document.getElementById("erreurPh").style.color="green";
                           phone.style.color = "green";
                           phone.style.border = "2px solid green";                 
                           return true;    
                       }              
       }      
function validationMotPasse()
             {   
                 let password = document.getElementById("motpasse"); 
                 let verifmot=/^[a-zA-Z0-9 ]+$/;
                        if (!(password.value.match(verifmot))||password.value =="")                          
                        { 
                           document.getElementById("erreurMOT").innerHTML="❌"; 
                           document.getElementById("erreurMOT").style.color="red";
                           password.style.color = "green";
                           password.style.border = "2px solid red";
                           password.focus(); 
                            return false; 
                        }
                 else     
                         {
                            document.getElementById("erreurMOT").innerHTML = "✔️";
                            document.getElementById("erreurMOT").style.color="green";
                            password.style.color = "green";
                            password.style.border = "2px solid green";
                            return true;
                         }   
                 }
    function verifSexe()
    { let valide=true ;
            if(document.getElementById("radio1").checked || document.getElementById("radio2").checked)
            {valide=true ;}
            else 
             {valide=false;}
            if(valide)
        { document.getElementById("erreurS").innerHTML="✔️";
            document.getElementById("erreurS").style.color = "green";} 
            else
           {document.getElementById("erreurS").innerHTML="❌";
            document.getElementById("erreurS").style.color = "red";
           }
         }
function validationComment()
           {   
               let comment = document.getElementById("commentaire");      
                   if (comment.value ==""||comment.value.length>60)
                   {
                      document.getElementById("erreurC").innerHTML="❌"; 
                      document.getElementById("erreurC").style.color="red";
                      comment.style.color = "red";
                      comment.style.border = "2px solid red";
                      comment.focus(); 
                       return false; 
                   }
                   else               
                   {  
                       document.getElementById("erreurC").innerHTML = "✔️";
                       document.getElementById("erreurC").style.color="green";
                       comment.style.color = "green";
                       comment.style.border = "2px solid green";
                       return true;
                   }
           }
function validation()
 {
  if(validationNom()==false||validationPrenom()==false||validationEmail()==false||validationPhone()==false||validationMotPasse()==false||verifSexe()==false||validationComment()==false)
        {
            document.getElementById("erreur").innerHTML = "Vos informations sont incorrectes ou encore vide!";
            document.getElementById("erreur").style.color="red";
            document.getElementById("erreur").style.fontSize="20px";
       }
         else{
        document.getElementById("erreur").innerHTML = "✔️✔️✔️Félécitations!!✔️✔️✔️";
        document.getElementById("erreur").style.color="green";
        document.getElementById("erreur").style.fontSize="20px";
        alert("fourmulaire envoye");
            }
        }