import React , { Component} from "react";
import Tabs from '../communComponent/tabs'
import ComposeHeader  from "../communComponent/composeheader";
import  LibraryCSS  from '../css/Mes_demandes_utilisateur_my_library.module.css'

import notfound from '../images/notfoundDesktop.17f94b1e.svg'

class Mylibrary  extends Component{
    render(){  
        return (
        <div>
            <ComposeHeader/>
            <main>
                <Tabs/>
                <div className={LibraryCSS.containerLib}>
                        
                        <div>
                            <input type="search" placeholder="Search" className={LibraryCSS.inputLib}/>
                        </div>
                
                        <h1 className={LibraryCSS.h1Lib}>This section is still empty!</h1>
                        <p className={LibraryCSS.pLib}>You can browse the marketpalce. If a document suits your actual needs or seems helpful for futue couses, make it yours by purchasing it!</p>
                    
                        <img src={notfound} alt="" className={LibraryCSS.notfoundimg}/>
                        <div>
                            <button className={LibraryCSS.button2}>Buy documents</button>
                            <button className={LibraryCSS.button1}>Upload documents</button>
                        </div>        
                </div>
            </main>

        </div>
        );
      };
}

export default Mylibrary;