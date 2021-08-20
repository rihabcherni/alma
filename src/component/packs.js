import React , { Component} from "react";
import ComposeHeader from "./communComponent/composeheader";
import packsCSS from '../component/css/packs.module.css'
import almis from '../component/images/almis.svg'
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
                  <div style={{display:'flex', flexDirection:'row'}}>
                  <img src={almis} alt="" className={packsCSS.imgpetit}/>
                  <p className={packsCSS.almisp}>5 CHF</p>  
                  </div>
              </div>

              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
              </div>
             
              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
              </div>
              
              <div className={packsCSS.packs}>
                  <img src={almis} alt="" className={packsCSS.imgGrand}/>
              </div>

          </div>




        
            
        </div>
      </>
    );
  };
}
export default Packs ;
