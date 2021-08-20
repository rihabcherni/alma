import React , { Component ,Fragment} from "react";
import HeaderSimple from "../communComponent/Simpleheader";
import FORCSS from "../css/MOTPASSEOUBLIE.module.css"
import forimg from "../images/Groupe 3513.svg"

class ForgetPASS extends Component{
  render(){
    return (   
        <Fragment>
          <HeaderSimple/>
          <main className={FORCSS.mainFor} >
                    <div className={FORCSS.containerFor}>
                        <div className={FORCSS.leftFor}>
                            <h1 className={FORCSS.titleFor}>Forgot your password?</h1>
                            <p className={FORCSS.pargraphFor}>Enter the email address you used when you signed in. You will receive a temporary link to reset your password.</p>
                            <input type="email" placeholder="Insert your email*" className={FORCSS.inputFor} />

                            <button className={FORCSS.buttonFor} ><a href="/sent-reset-password" className={FORCSS.aBtn} >SEND ME THE LINK</a></button>
                            <p className={FORCSS.lastFor}>Back to <a href="/inscr">Sign In</a></p>
                        </div>
                        <div className={FORCSS.rightFor}>
                            <img src={forimg} alt=""/>
                        </div>
                    </div>
            </main>
        
        
        </Fragment>
     );
}
}

export default ForgetPASS;