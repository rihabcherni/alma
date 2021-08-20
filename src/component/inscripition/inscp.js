import React , { Component ,Fragment} from "react";
import HeaderSimple from "../communComponent/Simpleheader";
import INSCSS from "../css/inscription.module.css"
import insimg from "../images/Groupe 3542.png" 

class Inscription extends Component{
  render(){
    return (   
        <Fragment>
          <HeaderSimple/>
          <main className={INSCSS.mainINS}>
                <div className={INSCSS.topINS}>
                    <h1>Join the Alma community!</h1>
                    <p>Boost your chance of success in your studies</p>
                </div>
          
                <div className={INSCSS.containerINS}>
                    <div className={INSCSS.signUpINS}>
                        <h1>Sign Up</h1>
                
                        <form name="form1" action="" method="POST">
                        
                        <div className={INSCSS.bothINS}>
                            <input type="text" placeholder="Name*" name="name" id="name" className={INSCSS.inputtextboth} />
                            <input type="text" placeholder="Surname*" name="Surname" id="Surname" className={INSCSS.inputtextboth}/><br/>
                        </div>
                    
                        <input type="text" placeholder="Username*" name="Username" id="Username" className={INSCSS.inputins}/><br/>
                        <input type="email" placeholder="E-mail*" name="email" id="email"className={INSCSS.inputins}/><br/>
                        <input type="password" placeholder="Password*" name="Password" id="Password" className={INSCSS.inputins}/><br/>
                        <input type="password" placeholder="Confirm password*" name="Password" id="Password" className={INSCSS.inputins}/><br/>
                
                         <button className={INSCSS.submitINS}><a href="/AccueilSimpleUser" style={{color:"white"}}>SIGN UP</a></button><br/>
                      </form>
                        
                    </div>
                    <div className={INSCSS.signInINS}>
                        <h1>Sign In</h1>
                        <form name="form2" action="" method="POST">
                            
                            <input type="email" placeholder="E-mail*" name="email" id="email" className={INSCSS.inputins}/><br/>
                            <input type="password" placeholder="Password*" name="Password" id="Password" className={INSCSS.inputins}/><br/>
                    
                            <button className={INSCSS.submitINS}><a href="/AccueilSimpleUser" style={{color:"white"}}>SIGN IN</a></button><br/>
                    
                            <p className={INSCSS.forgotINS}><a href="/forgetPASS">Forgot your password?</a></p>
                        </form>
                    </div> 
                    
                    <div className={INSCSS.rightINS}><img src={insimg} alt=""/></div>
                </div>
            </main>
                
        </Fragment>
     );
}
}

export default Inscription;
