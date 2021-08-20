import React , { Component ,Fragment} from "react";
import HeaderSimple from "../communComponent/Simpleheader";
import FORCSS from "../css/MOTPASSEOUBLIE.module.css"
import sentimg from "../images/Groupe 3513.svg"
class Reinitialiser extends Component{
  render(){
    return (   
        <Fragment>
          <HeaderSimple/>
          <main className={FORCSS.mainFor} >
                    <div className={FORCSS.containerFor}>
                        <div className={FORCSS.leftSent}>
                        <h1 className={FORCSS.titleFor} style={{ marginBottom :"20px"}}>Reset your password</h1>
                        <input type="password" placeholder="New password*" className={FORCSS.inputFor} />
                        <input type="password" placeholder="Confirm new password*" className={FORCSS.inputFor} />
                        <button style={{backgroundColor: "#C3C3C4", margin :"100px 0"}} className={FORCSS.buttonFor} >RESET</button>
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
export default Reinitialiser;