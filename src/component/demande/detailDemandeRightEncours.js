import React , { Component, } from "react";
import msg from '../images/Groupe 3518.svg'                       


import DDREncoursCCS  from  '../css/detailencours.module.css'

class DDREncours  extends Component{
    render(){  
        return (
            <>
                <div className={DDREncoursCCS.rightDetEn}>
                    <img src={msg} alt=""/>
                    <p>My Answer proposals</p>
                    <p>you don't have any offer for the moment! <br/> You'll be getting one soon!</p>
                   <hr className={DDREncoursCCS.hrEn}/>
                    <div className={DDREncoursCCS.btnEncours}>
                                   <button>Modify your request</button>
                                   <button>cancel your request</button>                                  
                    </div>
                </div>
            </>
        );
    };
}
export default DDREncours;