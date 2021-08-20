import React , { Component} from "react";
import Tabs from  '../communComponent/tabs'
import Request from "./request" 
import  InProgressCSS  from '../css/Demande.module.css'
import avatar from "../images/avatarUser.ceee5940.svg"
import price from "../images/Groupe 3400.svg"
import stopwatch from "../images/stopwatch (2).svg"
import dotted from "../images/dotted.PNG"
class InProgress  extends Component{
    render(){  
        return (
        <div>
            <main>            
            <div className={InProgressCSS.containerpr}>
                    
            <div className={InProgressCSS.ligne1pr}>
                    <div className={InProgressCSS.search}>
                        <input type="search" placeholder="search" className={InProgressCSS.inputtypesearch1} />
                    </div>
                    <div className={InProgressCSS.sortby}>
                        <select name="" id="" className={InProgressCSS.selectDem}>
                            <option value="" className={InProgressCSS.active}>Sort By</option>
                            <option value="ASC">ASC</option>
                            <option value="DESC">DESC</option>
                        </select>
                    </div>
                </div>

                    <div className={InProgressCSS.wrapperpr}>
                            <div className={InProgressCSS.rectpr}>
                                <div className={InProgressCSS.col1pr}>
                                    <img src={avatar}alt="avatar"/>
                                </div>
                                <div className={InProgressCSS.col2pr}>
                                <p>30 octobre 2020</p>
                                <p>Le manageur: quel rôle, quelle activité? </p>
                                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                        
                                </div>
                    
                                <div className={InProgressCSS.col3pr}>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={price} alt="price" /><span>5 - 10 €</span>                            
                                    </div>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={stopwatch} alt="stopwatch" /> <span>2j 4h</span>                        
                                    </div>
                                </div>
            
                                <div className={InProgressCSS.col5pr}>   
                                    <button>Show details</button>
                                </div>
                                <div className={InProgressCSS.col6pr}>
                                    <p>EN</p>
                                </div>
                            </div>
                            <div className={InProgressCSS.dottedpr}>
                                <button ><img src={dotted} alt="" id="dotted1"/></button>
                                <div className={InProgressCSS.uploadbtnpr}  id="uploadbtn1">
                                    <p>Edit</p>
                                    <hr/>
                                    <p>Cancel</p>
                                </div>
                            </div>

                            <div className={InProgressCSS.rectpr}>
                                <div className={InProgressCSS.col1pr}>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <div className={InProgressCSS.col2pr}>
                                <p>30 octobre 2020</p>
                                <p>Le manageur: quel rôle, quelle activité? </p>
                                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                        
                                </div>
                    
                                <div className={InProgressCSS.col3pr}>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={price} alt="price" /><span>5 - 10 €</span>                            
                                    </div>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={stopwatch} alt="stopwatch" /> <span>2j 4h</span>                        
                                    </div>
                                </div>
            
                                <div className={InProgressCSS.col5pr}>   
                                    <button>Show details</button>
                                </div>
                                <div className={InProgressCSS.col6pr}>
                                    <p>EN</p>
                                </div>
                            </div>
                            <div className={InProgressCSS.dottedpr}>
                                <button ><img src={dotted}  alt="" id="dotted1"/></button>
                                <div className={InProgressCSS.uploadbtnpr}  id="uploadbtn1">
                                    <p>Edit</p>
                                    <hr/>
                                    <p>Cancel</p>
                                </div>
                            </div>

                            <div className={InProgressCSS.rectpr}>
                                <div className={InProgressCSS.col1pr}>
                                    <img src={avatar} alt="avatar"/>
                                </div>
                                <div className={InProgressCSS.col2pr}>
                                <p>30 octobre 2020</p>
                                <p>Le manageur: quel rôle, quelle activité? </p>
                                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                        
                                </div>
                    
                                <div className={InProgressCSS.col3pr}>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={price} alt="price"/><span>5 - 10 €</span>                            
                                    </div>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={stopwatch} alt="stopwatch"/> <span>2j 4h</span>                        
                                    </div>
                                </div>
            
                                <div className={InProgressCSS.col5pr}>   
                                    <button>Show details</button>
                                </div>
                                <div className={InProgressCSS.col6pr}>
                                    <p>EN</p>
                                </div>
                            </div>
                            <div className={InProgressCSS.dottedpr}>
                                <button ><img src={dotted}  alt="" id="dotted1" /></button>
                                <div className={InProgressCSS.uploadbtnpr}  id="uploadbtn1">
                                    <p>Edit</p>
                                    <hr/>
                                    <p>Cancel</p>
                                </div>
                            </div>

                            <div className={InProgressCSS.rectpr}>
                                <div className={InProgressCSS.col1pr}>
                                    <img src={avatar} alt="avatar"/>
                                </div>
                                <div className={InProgressCSS.col2pr}>
                                <p>30 octobre 2020</p>
                                <p>Le manageur: quel rôle, quelle activité? </p>
                                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                        
                                </div>
                    
                                <div className={InProgressCSS.col3pr}>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={price} alt="price"/><span>5 - 10 €</span>                            
                                    </div>
                                    <div className={InProgressCSS.imgcol3pr}>
                                        <img src={stopwatch} alt="stopwatch"/> <span>2j 4h</span>                        
                                    </div>
                                </div>
            
                                <div className={InProgressCSS.col5pr}>
                                    <button>Show details</button>
                                </div>
                                <div className={InProgressCSS.col6pr}>
                                    <p>EN</p>
                                </div>
                            </div>
                            <div className={InProgressCSS.dottedpr}>
                                <button><img src={dotted} alt="" id="dotted1"/></button>
                                <div className={InProgressCSS.uploadbtnpr} id="uploadbtn1">
                                    <p>Edit</p>
                                    <hr/>
                                    <p>Cancel</p>
                                </div>
                            </div>
                        </div>
                  </div>
            </main>
        </div>
    
        
        );
      };
}

export default InProgress;