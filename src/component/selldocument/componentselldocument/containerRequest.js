
import React , { Component, Fragment} from "react";
import Request from "./request"

import addimg from '../../images/Add.svg'
import  PDcss  from '../../css/Marketplace.module.css'
class ContainerRequest extends Component{
    render(){
        return (
        <Fragment>
<div className={PDcss.rect3market}>
                                <div className={PDcss.selmarket}>
                                        <select  name="" id="">
                                            <option value="">Sort by</option>
                                            <option value="ASC">ASC</option>
                                            <option value="DESC">DESC</option>
                                        </select>
                                </div>
                                            
                                <div className={PDcss.search}>
                                        <input type="search" id="site-search" name="site-search" placeholder="Search" className={PDcss.inputsearchmarket}/>
                                </div>

                                <div className={PDcss.selmarket}>
                                        <select  name="" id="">
                                            <option value="Select a field">Select a field</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                </div>

                                    <div className={PDcss.fil}>
                                        <input type="" placeholder="Filters"  aria-invalid="false"/>
                                        <img src="images/filters.PNG" alt="filters images" className={PDcss.imgfilter}/>
                                    </div>
                                
                                    <div>
                                        <button className={PDcss.buttonmarket}>UPLOAD DOCUMENTS</button>
                                        <div className={PDcss.uploadbtn}  id="uploadbtn">
                                            <p>Document</p>
                                            <hr/>
                                            <p>Request</p>
                                        </div>
                                    </div>
                                    
                                
                                </div>
                                    <div className={PDcss.filtermarket} id="filter">
                                        <div className={PDcss.selmarket}>
                                            <select name="Type of document" id="Type of document">
                                                <option value="Type of document">Type of document</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Tutor" id="Tutor">
                                                <option value="Tutor">Tutor</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Academic level*" id="Academic level*">
                                                <option value="Academic level*">Academic level*</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Language" id="Language">
                                                <option value="Language">Language</option>
                                                <option value="French">French</option>
                                                <option value="English">English</option>
                                                <option value="Arabic">Arabic</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                        </div>
                                    </div> 
                        
                                <div className={PDcss.showingmarket}> 
                                    <p>Showing 1–12 of 53 results</p>
                                </div>
                <div className={PDcss.containermarket}>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                
                <div className={PDcss.lastlinemarket} >
                        <Request/>
                </div>   
                </div>

                <div className={PDcss.bottommarket}>
                <a href="/productdocument" className={PDcss.linkprevmarket}>
                <img src={addimg} className={PDcss.flechemarket} alt=""/> PREV
                </a>  
                <a href="/productdocument" className={PDcss.linkmarket}>1</a> 
                <a href="/productdocument 2" className={PDcss.linkunderlinemarket}>2</a>

                <a href="/productdocument" className={PDcss.linknextmarket}>
                NEXT<img src={addimg} alt='' />
                </a>
                </div>  
         </Fragment>

        );
    };
}
export default ContainerRequest;