import React , { Component} from "react";

import avataruser1 from "../images/avatarUser.ceee5940.svg"
import price from "../images/Groupe 3400.svg"
import stopwatch from "../images/stopwatch (2).svg"
import dotted from "../images/dotted.PNG"

import  ResolvedCSS  from '../css/Demande_resolved.module.css'
import '../css/glob.css'
import ReactStars from "react-rating-stars-component";
import SortBy from '../communComponent/select/sortBy'
const showHideDiv2 = (ele) =>{
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        if (srcElement.style.display === "none") {
            srcElement.style.display = 'block';   
        }
        else {
            srcElement.style.display = 'none';
        }
        return false;
    }
}
class Resolved  extends Component{
    render(){  
        return (
        <div>
            <main>
                    <div className={ResolvedCSS.container}>
                        <div className={ResolvedCSS.ligne1}>
                            <div className={ResolvedCSS.search}>
                                <input type="search" placeholder="search" className={ResolvedCSS.inputtypesearch}/>
                            </div>

                            <div className={ResolvedCSS.tutor}>
                                <select name="" id="" className={ResolvedCSS.selectres}>
                                    <option value="">Tutor</option>
                                </select>
                            </div>

                            <div className={ResolvedCSS.date}>
                                <select name="" id="" className={ResolvedCSS.selectres}>
                                    <option value="">Date</option>
                                </select>
                            </div>

                       <SortBy/>
                        </div>
                        <div  className={ResolvedCSS.wrapper}>
                                <div  className={ResolvedCSS.rect}>
                                    <div  className={ResolvedCSS.col1}>
                                        <img src={avataruser1} alt="avataruser" />
                                    </div>
                                    <div  className={ResolvedCSS.col2}>
                                    <p>30 octobre 2020</p>
                                    <p>Le manageur: quel rôle, quelle activité? </p>
                                    <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                            
                                    </div>
                        
                                    <div className={ResolvedCSS.col3}>
                                        <div className={ResolvedCSS.imgcol3}>
                                            <img src={price} alt="" /><span>5 - 10 €</span>                            
                                        </div>
                                        <div className={ResolvedCSS.imgcol3}>
                                            <img src={stopwatch } alt="stopwatch" /> <span>2j 4h</span>                        
                                        </div>
                                    </div>

                                    <div className={ResolvedCSS.col5}>
                                         <ReactStars size={30} isHalf={true}/>
                                         <button>Show details</button>
                                    </div>
                                    <div className={ResolvedCSS.col6}>
                                        <p>EN</p>
                                    </div>
                                </div>
                                <div className={ResolvedCSS.dotted}>
                                    <button onClick="showHideDiv2('uploadbtn1')" className={ResolvedCSS.dottedbutton}><img src={dotted} alt="" id="dotted1" /></button>
                                    <div className={ResolvedCSS.uploadbtn}  id="uploadbtn1">
                                        <p>Edit</p>
                                        <hr/>
                                        <p>Cancel</p>
                                    </div>
                                </div>
                                <div className={ResolvedCSS.rect}>
                                    <div className={ResolvedCSS.col1}>
                                        <img src={avataruser1} alt="" />
                                    </div>
                                    <div className={ResolvedCSS.col2}>
                                    <p>30 octobre 2020</p>
                                    <p>Le manageur: quel rôle, quelle activité? </p>
                                    <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                                    </div>

                                    <div className={ResolvedCSS.col3}>
                                        <div className={ResolvedCSS.imgcol3}>
                                            <img src={price} alt="" /><span>5 - 10 €</span>                            
                                        </div>
                                        <div className={ResolvedCSS.imgcol3}>
                                            <img src={stopwatch}alt="" /> <span>1j 6h</span>                        
                                        </div>
                                    </div>

                                
                                    <div className={ResolvedCSS.col5}>
                                    <ReactStars size={30} isHalf={true}/>

                                        
                                        <button>Show details</button>
                                </div>
                                    <div className={ResolvedCSS.col6}>
                                        <p>FR</p>
                                    </div>
                                </div>
                                <div className={ResolvedCSS.dotted}>
                                    <button onClick={showHideDiv2('uploadbtn')} className={ResolvedCSS.dottedbutton}><img src={dotted} alt="" id="dot" /></button>
                                    <div className={ResolvedCSS.uploadbtn} id="uploadbtn">
                                        <p>Edit</p>
                                        <hr />
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

export default Resolved;