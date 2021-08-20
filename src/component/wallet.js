import React , { Component} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ComposeHeader from "./communComponent/composeheader";
import HomeCSS from "../component/css/home.module.css"
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import walletCSS from '../component/css/wallet.module.css'
import swapGagne from '../component/images/swapgagne.PNG'
import swapLose from '../component/images/swapLose.PNG'
import { NavLink } from "react-router-dom";
class Wallet extends Component{
    render(){  
     return (
        
      <>
        <ComposeHeader/>
        <div style={{display:'grid', gridTemplateColumns:'70% 30%'}}>
            <div style={{backgroundColor:'var(--maincolor)', height:'170vh', padding:'40px 30px 0 12%'}}>
                <p style={{color:'#02044F',fontFamily:'var(--Fredoka)', fontSize:'45px'}}>My wallet</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2, 40%)',gap:'2%', marginTop:'30px'}}>
                                 
                   <div style={{backgroundColor:'white',borderRadius:"9px",padding:'40px 20px 30px 30px' }}>
                        <p className={walletCSS.pblue2}>Earned Credit</p>
                        <div style={{display:"grid",marginBottom:'20px', gridTemplateColumns:"75% 25%"}}>
                            <p style={{color:'#ffc600', fontSize:'30px', fontFamily:"var(--Fredoka)",marginTop:'25px'}}>300 Alm</p>
                            <Fab size="large" aria-label="swap"  style={{backgroundColor:'#355b97', color:'white', width:'65px', marginTop:'-10px', height:'65px'}}><SyncAltIcon /></Fab>
                        </div>
                        <p className={walletCSS.pblue}>Vous pouvez demander un retarait pour pour votre credit gagné grace à la vente de documents ou le tutoring</p>
                   </div>


                   <div style={{backgroundColor:'white' ,borderRadius:"9px",padding:'40px 20px 10px 30px' }}>
                        <p style={{color:'#c3c3c4', fontFamily:'var(--Roboto)'}}>Purchased Credit</p>
                        <div style={{display:"grid",marginBottom:'20px', gridTemplateColumns:"75% 25%"}}>
                            <p style={{color:'#02044f', fontSize:'30px', fontFamily:"var(--Fredoka)",marginTop:'25px'}}>250 Alm</p>
                            <Fab aria-label="add"  className={HomeCSS.addicon}><AddIcon /></Fab>
                        </div>
                            
                        <p className={walletCSS.pblue}>Ce credit ne peut etre consommé qu'au sein de la plateforme Alma.</p>
                   </div>
              </div> 
              <p style={{color:'#02044F',fontFamily:'var(--Fredoka)', fontSize:'25px',margin:'33px 0 20px'}}>Latest Transaction </p>
              <div style={{backgroundColor:'white',height:'100vh',padding:'35px 70px 0 50px'}}>
                        <div>
                                    <p className={walletCSS.datep}>30 Juillet 2021</p>                      
                                    <div style={{display:'grid', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                        <p className={walletCSS.pblue3}>Tutoring</p> 
                                        <img src={swapGagne} alt="" className={walletCSS.swapgagne}/>
                                        <p className={walletCSS.pblue2}>Earned Credit</p>
                                        <p className={walletCSS.pblue3}>+ 50  Alm</p> 
                                    </div>

                                    <div style={{display:'grid',marginTop:'20px', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                        <p className={walletCSS.pblue3}>Book download</p> 
                                        <img src={swapGagne} alt="" className={walletCSS.swapgagne}/>
                                        <p className={walletCSS.pblue2}>Earned Credit</p>
                                        <p className={walletCSS.pblue3}>+ 34  Alm</p> 
                                    </div>


                                    <div style={{display:'grid', marginTop:'20px', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                        <p className={walletCSS.pblue3}>Credit</p> 
                                        <img src={swapGagne} alt="" className={walletCSS.swapgagne}/>
                                        <p className={walletCSS.pblue2}>purchased Credit</p>
                                        <p className={walletCSS.pblue3}>+ 50  Alm</p> 
                                    </div>


                                    <div style={{display:'grid',marginTop:'20px', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                        <p className={walletCSS.pblue3}>Book download</p> 
                                        <img src={swapGagne} alt="" className={walletCSS.swapgagne}/>
                                        <p className={walletCSS.pblue2}>Earned Credit</p>
                                        <p className={walletCSS.pblue3}>+ 34  Alm</p> 
                                    </div>
                        </div>
                        <div style={{marginTop:'50px'}}>
                                    <p className={walletCSS.datep}>30 Juillet 2021</p>                      
                                        <div style={{display:'grid', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                            <p className={walletCSS.pblue3}>Tutor paiement</p> 
                                            <img src={swapLose} alt="" className={walletCSS.swapgagne}/>
                                            <p className={walletCSS.pblue2}>Paiement credit</p>
                                            <p className={walletCSS.pblue3}>+ 50  Alm</p> 
                                        </div>

                                        <div style={{display:'grid',marginTop:'20px', gridTemplateColumns:'repeat(4,30%)', justifyContent:'space-arround'}}>
                                            <p className={walletCSS.pblue3}>Retrait credit</p> 
                                            <img src={swapLose} alt="" className={walletCSS.swapgagne}/>
                                            <p className={walletCSS.pblue2}>Retrait Credit</p>
                                            <p className={walletCSS.pblue3}>+ 34 Alm</p> 
                                        </div>
                                    </div>
                    </div>         
            </div>


            <div style={{borderTop:'4px solid var(--maincolor)'}}>
              <div style={{ padding:'40px'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>   
                                <div style={{backgroundColor:'#99c2ec',color:"white" , borderRadius:'9px',padding:'35px',marginRight:'20px'}}>
                                    <p style={{fontFamily:'var(--Roboto)' ,fontSize:'12px'}}>My Ballance</p>
                                    <p style={{fontFamily:'var(--Fredoka)', fontSize:'30px'}}>550 Alm</p>
                                </div>                    
                                <Fab aria-label="add"  className={HomeCSS.addicon} style={{marginTop:'35px'}}><AddIcon/></Fab>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginTop:'30px'}}>
                        <p className={walletCSS.pblue3} style={{color:'#02044F',fontSize:'22px'}}>Alma's packs</p>
                      <NavLink to='/packs'><p className={walletCSS.pblue3}  style={{marginTop:'8px',fontSize:'14px'}}>+ Discover more</p></NavLink>  
                    </div>

              </div> 
                
             

            </div>
        </div>
    </>  
            
    );    
    }
}

export default Wallet;