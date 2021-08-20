import React , { Component, Fragment} from "react";

import  DetailsRequestcss  from '../css/MARKETPLACE_DETAIL_REQUEST.module.css'
import ComposerHeader  from "../communComponent/composeheader";
import ReactStars from "react-rating-stars-component";

class DetailsRequest extends Component{
    render(){
        return (
        <Fragment>
            <ComposerHeader/>  

          <main>
      <hr/>
            <div className={DetailsRequestcss.back}>
                <img src="images/Add.svg" alt="fleche-arriere"/>
                <span>Back</span>
            </div>
        <div className={DetailsRequestcss.rectangle1}>                 
              <div className={DetailsRequestcss.container}>
                    <div className={DetailsRequestcss.left}>
                         <p>Le manageur : quel rôle, quelle activité? Le manageur quel rôle, quelle activité?</p>
                         <ReactStars size={50} isHalf={true}/>
        
                    </div>
                    <div className={DetailsRequestcss.right}>
                            <p>50.00 €</p>
                            <button>Subscribe to view the DOCUMENT</button>
                    </div>
              </div> 
              <div>
                    <div  className={DetailsRequestcss.rectbottom}>
                  <div className={DetailsRequestcss.top}>
                        <span>Pseudo tuteur </span>
                        <span>Management</span>
                        <span>Fr</span>
                        <span>The Faculty Of Buisness And Economics Of The University Of Lausanne</span>
                  </div>
                  <p id="school">High school</p>
                        <p className={DetailsRequestcss.parg}>
                                what are two selecting criteria categories for artificialintelligence classification and technology identification at the national level??
                                <br/>Quelles stratégies pour développer le management du lorem ipsum dolor lorem Quelles stratégies pour développer le management du lorem ipsum dolor lorem?</p>
                    </div>      
              </div>
       </div> 
       <div> 
                <div className={DetailsRequestcss.rectangle2}>
                        <p><span>6 pages | </span> Resume</p>
                        <div>

                        </div>
                </div>
                <div className={DetailsRequestcss.review}>
                        <p className={DetailsRequestcss.rev}>Review (3)</p>
                                <div className={DetailsRequestcss.pseudouser}>
                                        <p>Pseudo User</p>
                                        <p>28 octobre 2020</p>
                                        <p>Really great stuff, couldn't ask for more. The assignment was done with remarkable detail.</p>
                                </div>
                                
                                <div className={DetailsRequestcss.pseudouser}>
                                        <p>Pseudo User</p>
                                        <p>28 octobre 2020</p>
                                        <p>Goes above and beyond expectations !</p>
                                </div>
                            
                                <div className={DetailsRequestcss.pseudouser}>
                                        <p>Pseudo User</p>         
                                        <p>28 octobre 2020</p>
                                        <p>Really great stuff, couldn't ask for more. The assignment was done with remarkable detail.</p>
                                </div>

                </div>
      </div>
      </main>
      </Fragment>
                );
              };
          }
  export default DetailsRequest ;