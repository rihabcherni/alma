import React , { Component, Fragment} from "react";
import sellCSS from '../css/sellDocument.module.css'
import ComposerHeader  from "../communComponent/composeheader";
import notfoundimg from '../images/Groupe 3381.svg'

import  Fields from '../communComponent/select/fields'
import  Doc from '../communComponent/select/Docselect'
import  School from '../communComponent/select/school'
import  Language from '../communComponent/select/lang'
import TypeDoc from '../communComponent/select/typeDoc'
import AcademicLevel from '../communComponent/select/acadmiclevel'
import CheckboxSell from '../communComponent/select/checkbox'

class SellDocument extends Component{
    render(){
        return (
        <Fragment>
            <ComposerHeader/>  
                <main className={sellCSS.mainsell}>
                    <hr/>
                        <div className={sellCSS.topsell}>
                            <h1 className={sellCSS.h1sell}>Sell a document</h1>
                            <p className={sellCSS.psell}>Provide us with more details about the content of your document</p>
                        </div>    
                        
                        <div className={sellCSS.centersell}> 
                            
                            <div className={sellCSS.leftsell}>
                                          <Fields/>         
                                          <Doc/>
                                            <textarea name="" id="" cols="30" rows="3" placeholder="Your request*"  className={sellCSS.textareasell1}></textarea>
                                            <textarea name="" id="" cols="30" rows="7" placeholder="Summary*" className={sellCSS.textareasell2}></textarea>
                                           <School/>
                                           <Language/>
                            </div>
                        
                            <div className={sellCSS.rightsell}> 
                                        <div className={sellCSS.rectsell}>
                                                    <p className={sellCSS.rectsellp1}>Upload the answer to the question</p>
                                                        <img src={notfoundimg} alt="" className={sellCSS.rectsellimg}/>
                                                        <p className={sellCSS.rectsellp2}>Pdf, does not exceed 10 MB<br/>
                                                            You can add only 1 file</p>
                                                        <button className={sellCSS.rectsellbuttton}>
                                                            <input type="file" className={sellCSS.inputfile}/> 
                                                            <span className={sellCSS.rectsellspan}>Insert a file</span>
                                                        </button>
                                         </div>     
                                         <div className={sellCSS.rect3rightsell}>
                                             <TypeDoc/>            
                                             <AcademicLevel/>
                                         </div>
                                             
                                        <div className={sellCSS.rect3rightsell}>
                                            <input type="text" placeholder="Number of pages*" id="page-nbr" className={sellCSS.inputselltext1}/> 
                                            <input type="text" placeholder="Price*" id="price" onclick="myFunction()" className={sellCSS.inputselltext2}/> 
                                        </div>
                                    </div>
                                    
                        </div>
                
                        <div className={sellCSS.bottomsell}>
                            <CheckboxSell/>
                        <br/>
                            <button type="reset" className={sellCSS.buttonsell1}>Cancel</button>
                            <button type="submit" className={sellCSS.buttonsell2}>Publish</button>
                        </div>      
                        </main>
            </Fragment>
        );
        };
    }
    export default SellDocument;