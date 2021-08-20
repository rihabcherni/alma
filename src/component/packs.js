import React , { Component} from "react";
import ComposeHeader from "./communComponent/composeheader";
import packsCSS from '../component/css/packs.module.css'
import almis from '../component/images/almis.svg'
import msg from '../component/images/msg.PNG'
import msg2 from '../component/images/msg2.PNG'

class Packs extends Component{
    render(){  
     return (       
      <>
      < ComposeHeader/>
        <div className={packsCSS.mainpacks}>
          <div style={{textAlign:'center'}}>
                <h1 style={{fontSize:'45px', fontFamily:"var(--Fredoka)",color:'#02044F'}}>Alma's credit packs</h1>
                <br/>
                <p style={{fontSize:'18px', fontFamily:"var(--Fredoka)",color:'#7F7B88'}}>Get a pack to download shared Marketplace documents at any time</p>
          </div>

          <div className={packsCSS.conatinerPacks}>
              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
                  <p className={packsCSS.almisp}>20 Almees</p>
                  <div style={{display:'flex', flexDirection:'row',marginLeft:'55px',marginBottom:'60px'}}>
                  <img src={almis} alt="" className={packsCSS.imgpetit}/>
                  <p className={packsCSS.almisp2}>5 CHF</p> 
                 
                  </div>
                  <a href='/credit-Paiment-Packs'><button className={packsCSS.buttonselect}>SELECT</button></a> 
              </div>
           
              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
                  <p className={packsCSS.almisp}>60 Almees</p>
                  <div style={{display:'flex', flexDirection:'row',marginLeft:'55px',marginBottom:'10px'}}>
                  <img src={almis} alt="" className={packsCSS.imgpetit}/>
                  <p className={packsCSS.almisp2}>13 CHF</p> 
                 
                  </div>
                  <p  className={packsCSS.almisp3}>-13% Save 2 CHF</p>
                  <a href='/credit-Paiment-Packs'><button className={packsCSS.buttonselect}>SELECT</button></a> 
              </div>
            
              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
                  <p className={packsCSS.almisp}>100 Almees</p>
                  <div style={{display:'flex', flexDirection:'row',marginLeft:'55px',marginBottom:'10px'}}>
                  <img src={almis} alt="" className={packsCSS.imgpetit}/>
                  <p className={packsCSS.almisp2}>20 CHF</p> 
                 
                  </div>
                  <p  className={packsCSS.almisp3}>-20% Save 5 CHF</p>
                  <a href='/credit-Paiment-Packs'><button className={packsCSS.buttonselect}>SELECT</button></a> 
              </div>

              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
                  <p className={packsCSS.almisp}>200 Almees</p>
                  <div style={{display:'flex', flexDirection:'row',marginLeft:'55px',marginBottom:'10px'}}>
                  <img src={almis} alt="" className={packsCSS.imgpetit}/>
                  <p className={packsCSS.almisp2}>38 CHF</p> 
                 
                  </div>
                  <p className={packsCSS.almisp3}>-24% Save 12 CHF</p>
                  <a href='/credit-Paiment-Packs'><button className={packsCSS.buttonselect}>SELECT</button></a> 
              </div>
            </div>     
        </div>   
              <p className={packsCSS.almispbottom}>Why get a pack ?</p> 
              <div className={packsCSS.bottompacks}>
                   <div className={packsCSS.msg1}>
                      <img src={msg} alt="" style={{marginTop:'30px'}}/>
                      <div>
                            <p className={packsCSS.almisp}>Ask your question</p>
                            <p className={packsCSS.almisp5}>Make your request: Set up <b>your</b> deadline and indicate <b>your</b> price range!</p>
                      </div>
                   </div>

                   <div className={packsCSS.msg1}>
                   <img src={msg2} alt="" style={{marginTop:'30px'}}/>
                      <div>
                            <p className={packsCSS.almisp}>Ask your question</p>
                            <p className={packsCSS.almisp5}>Buy an academic document from the marketplace without Waiting</p>
                      </div>
                   </div>
              </div>  
      </>
    );
  };
}
export default Packs ;
