import React  from "react";
import ComposeHeader from "./communComponent/composeheader";
import SwitchButton from '../component/communComponent/switchButton'
import { useState } from "react";

export default function Setting() {
       
    const [value, setValue] = useState(false);
        return (
              <>
                    <ComposeHeader/>
                    <hr/>
                    <h1 style={{textAlign:"center" , marginTop:'30px', color:"#02044F", fontFamily:'var(--Fredoka)', fontSize:'40px'}} >Settings</h1>
                    <div style={{backgroundColor:"#F5F5FB", margin:'30px 60px 0' , padding:'50px 12% 0', height:"70vh"}} >
                        <div style={{backgroundColor:"white", margin:'0px 60px 0' , padding:'30px 8% 0', height:"62vh"}}>
                            <p style= {{color:'#355B97', fontFamily:'var(--Fredoka)', fontSize:'30px', marginBottom:'20px'}}>Notifications</p><br/>
                          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'10px'}}>
                                    <p style={{color:"#02044F", fontFamily:'var(--Fredoka)', fontSize:'14px'}}>Activer toutes les notifications </p>
                                    <SwitchButton
                                            isOn={value}
                                            onColor="#355B97"
                                            handleToggle={() => setValue(!value)}
                                     />
                          </div>
                           
                            <hr style={{marginBottom:"40px"}}/>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <p style= {{color:'#355B97', fontFamily:'var(--Roboto)', fontSize:'14px', marginBottom:'20px'}}>Notifications messages</p>
                                    <SwitchButton
                                            isOn={value}
                                            onColor="#355B97"
                                            handleToggle={() => setValue(!value)}
                                    />
                            </div>
                            
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <p style= {{color:'#355B97', fontFamily:'var(--Roboto)', fontSize:'14px', marginBottom:'20px'}}>Notifications nouvelle publication d'un tuteur avec qui j'ai travaillé</p>
                                    <SwitchButton
                                            isOn={value}
                                            onColor="#355B97"
                                            handleToggle={() => setValue(!value)}
                                    />
                            </div>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                        <p style= {{color:'#355B97', fontFamily:'var(--Roboto)', fontSize:'14px'}}>Notifications marketplace</p>
                                        <SwitchButton
                                            isOn={value}
                                            onColor="#355B97"
                                            handleToggle={() => setValue(!value)}
                                        />
                            </div>
                            
                        </div>
                    </div>
              </>
        );    
}
