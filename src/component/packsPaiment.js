import React , { Component} from "react";
import ComposeHeader from "./communComponent/composeheader";

class CreditPaimentPacks extends Component{
    render(){  
     return (
        
      <>
        <ComposeHeader/>
        <div style={{backgroundColor:'var(--maincolor)', margin:'0 5% 0', padding:'3% 7%'}}>
             <p style={{textAlign:'center', color:'#02044F', fontFamily:'var(--Fredoka)', fontSize:'25px',borderRadius:'9px'}}>Upgrade your wallet to take advatnage of Alma's Services</p>
             <div style={{backgroundColor:'white', margin:'30px 10%',padding:'30px 40px'}}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',color:'#02044F',fontFamily:'var(--Roboto)',fontSize:'14px'}}>
                       <p>Current Balance</p> 
                       <p>550 Alm</p>
                    </div>
                    <br/><hr/><br/>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <div>
                              <p style={{color:'#02044F',fontFamily:'var(--Roboto)',fontSize:'14px'}}>Select Pack</p>
                              <p style={{color:'#02044F',fontFamily:'var(--Fredoka)',fontSize:'22px', marginTop:'10px'}}>60 Almees</p> 
                        </div>  
                       <p style={{color:'#355B97',fontFamily:'var(--Fredoka)',fontSize:'22px',marginTop:'30px'}}>13 CHF</p>
                    </div>

                   <p style={{color:'#355B97',fontFamily:'var(--Fredoka)',fontSize:'26px',marginTop:'30px'}}>Payment information</p> 
                   <p style={{color:'#7F7B88',fontFamily:'var(--Roboto)',fontSize:'14px',marginTop:'10px'}}>Please Fill Out The Following Fields To Complete Your Purchase</p>
                   <div style={{margin:'30px 120px 10px 80px'}}>
                        <input type='text' placeholder='Name on card'style={{width:'100%', backgroundColor:'var(--maincolor)'}}/>
                        <input type='text' placeholder='Card number'style={{width:'100%', backgroundColor:'var(--maincolor)', marginTop:'20px'}}/>
                        <div style={{display:'grid', gridTemplateColumns:'repeat(2 , 50.8%)',gap:'2%',margin:'20px 0'}}>
                                <input type='text' placeholder='MM / AA'style={{ backgroundColor:'var(--maincolor)'}}/>
                                <input type='text' placeholder='CVC'style={{ backgroundColor:'var(--maincolor)'}}/>
                        </div> 
                        
                        <input type='text' placeholder='Billing adress' style={{width:'100%', backgroundColor:'var(--maincolor)'}}/>
                   </div> 
                   <div style={{ textAlign:'center',marginTop:'20px'}}>
                        <button type='submit' style={{textAlign:'center', backgroundColor:'#355B97',padding:'15px 70px', borderRadius:'5px',fontFamily:'var(--Roboto)',fontSize:'17px', border:'none',color:'white'}}>UPDATE BALANCE</button> 
                   </div>
                   
                   
             </div>
        </div>
      </>
    );
  };
}
export default CreditPaimentPacks ; 








