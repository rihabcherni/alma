import React , { Component, Fragment} from "react";

import imgp from "../images/Groupe 3744.svg"
import  PDcss  from '../css/Marketplace.module.css'
import ComposerHeader  from "../communComponent/composeheader";

import NavTabs from '../communComponent/tabs'

class Marketplace extends Component{
    render(){
        return (
        <Fragment>
            <ComposerHeader/>  
                <main className={PDcss.mainprod}>
                    <hr/>
                        <div className={PDcss.rect1market}>
                                    <div className={PDcss.rect1centermarket}> 
                                        <img src={imgp} alt="fausse" className={PDcss.rect1marketimg}/>
                                        <div>
                                            <h1  className={PDcss.rect1marketh1}>Marketplace</h1>
                                            <p  className={PDcss.rect1marketp}>Welcome to the most diverse academic market exchange!<br/>
                                                Here you will have acces to every kind of documents, from a simple
                                                Q&A to the trickiest essay topic!</p>
                                        </div>    
                                    </div> 
                        </div>
                                <NavTabs/>
                    </main>
                </Fragment>
            );
          };
      }
export default Marketplace ;