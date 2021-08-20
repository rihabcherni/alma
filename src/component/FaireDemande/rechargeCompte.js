import React , { Component} from "react";
import ComposerHeader from '../communComponent/composeheader'
import img1 from '../images/Groupe 3530.svg'
import '../css/glob.css'

import rechargeCSS from '../css/recharge.module.css'

class RechargerCompte  extends Component{
    render(){  
        return (
            <>
                <ComposerHeader/>
                      <div style={{textAlign:'center'}}>
                         <h2 style={{color:'#02044f',margin:'50px 0 5px 0', fontFamily:'var(--Fredoka)' ,fontSize: '25px' ,fontWeight: 'normal',   letterSpacing: '0.78px'}}>You have received a proposal of answer to your request</h2>
                            <p style={{color:'#02044f', fontFamily:'var(--Roboto)' ,fontSize: '20px' ,fontWeight: 'bold',   letterSpacing: '0.78px'}}>Please recharge your balance in order to be able to accept it</p>

                            <img src={img1} alt="" style={{width: '283px',height: '283px', margin: '52px 0 -20px 0'}}/>

                            <div className={rechargeCSS.bottomsell}>
                        <br/>
                            <button type="reset" className={rechargeCSS.buttonsell1}>Later</button>
                            <button type="submit" className={rechargeCSS.buttonsell2}>Recharge my balance</button>
                        </div>    
                      </div>
                            
            </>

            
        );
      };
    } 
export default RechargerCompte;