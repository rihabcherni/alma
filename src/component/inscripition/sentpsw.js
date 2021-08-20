import React , { Component ,Fragment} from "react";
import HeaderSimple from "../communComponent/Simpleheader";
import FORCSS from "../css/MOTPASSEOUBLIE.module.css"
import sentimg from "../images/Groupe 3513.svg"
import sentimg2 from "../images/Groupe 3563.svg"
class Sentpsw extends Component{
  render(){
    return (   
        <Fragment>
          <HeaderSimple/>
          <main className={FORCSS.mainFor} >
                    <div className={FORCSS.containerFor}>
                        <div className={FORCSS.leftSent}>

                            <h1  className={FORCSS.titleFor}>Forgot your password?</h1>

                            <img src={sentimg2} alt="" className={FORCSS.sentimg}/>
                            <p className={FORCSS.pargraphFor}>A link to reset your password has been sent to you.</p>
                            <p className={FORCSS.lastFor}>Back to the <a href="/inscr">login</a> page</p>
                        </div>
                        <div className={FORCSS.rightFor}>
                            <img src={sentimg} alt=""/>
                        </div>
                </div>
        </main>
    </Fragment>
   );
 };
}
export default Sentpsw;