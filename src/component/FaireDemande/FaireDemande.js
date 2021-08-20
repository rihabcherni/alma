import React , { Component} from "react";
import ComposerHeader from '../communComponent/composeheader'
import '../css/glob.css'
import notfoundimg from '../images/Groupe 3381.svg'
import TextField from '@material-ui/core/TextField';
import sellCSS from '../css/sellDocument.module.css'
import Fields  from "../communComponent/select/fields";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Language  from "../communComponent/select/lang";
import Price from '../communComponent/price'
class FaireDemnade  extends Component{
    render(){  
        return (
        <div>
            <ComposerHeader/>

            <main className={sellCSS.mainsell}>
                    <hr/>
                        <div className={sellCSS.topsell}>
                            <h1 className={sellCSS.h1sell}>Make your request!</h1>
                        </div>    
                        
                        <div className={sellCSS.centersell}> 
                            
                            <div className={sellCSS.leftsell}>
                                         <Fields/>
                                         <TextField id="outlined-basic" label="Title*" variant="outlined" style={{backgroundColor:'white', margin:'8px 0 10px '}}/>
                                            <TextareaAutosize className={sellCSS.textareasell1} aria-label="minimum height" placeholder="Detail your request* " minRows={10}  style={{ resize: 'none'}} />                                    
                                            <TextareaAutosize className={sellCSS.textareasell2} aria-label="minimum height" placeholder="What are you expecting from the answer?" minRows={6}  style={{ resize: 'none'}} />                                    
                                        <Language/>
                            </div>
                        
                            <div className={sellCSS.rightsell}> 
                                        <div className={sellCSS.rectsell}>
                                                    <img src={notfoundimg} alt="" className={sellCSS.rectsellimg}/>
                                                        <p className={sellCSS.rectsellp2}>Jpg, png or pdf, does not exceed 10 MB
                                                         <br/>You can add up to 10 files</p>
                                                        <button className={sellCSS.rectsellbuttton} style={{marginTop:'170px'}}>
                                                            <input type="file" className={sellCSS.inputfile}/> 
                                                            <span className={sellCSS.rectsellspan}>Insert a file</span>
                                                        </button>
                                         </div>     
                                       
                                             
                                          <div className={sellCSS.PriceRange}>
                                           <span>Price range</span>
                                           <span>From</span>
                                           <Price/>                                           
                                                <span>To</span>
                                           </div>
                                           <div className={sellCSS.DeadlineRequest}>
                                           <span>Deadline of the request</span>
                                           </div>
                                    </div>
                                    
                        </div>
                
                        <div className={sellCSS.bottomsell}>
                        <br/>
                            <button type="reset" className={sellCSS.buttonsell1}>Cancel</button>
                            <button type="submit" className={sellCSS.buttonsell2}>Publish</button>
                        </div>      
                        </main>
    </div>
        );
      };
    } 
export default FaireDemnade;