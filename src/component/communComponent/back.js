import React , { Component} from "react";
import  back  from '../css/Back.module.css'
import fleche from '..//images/Add.svg'

class Back  extends Component{
    render(){  
        return (
             <div class={back.back}>
                <img src={fleche} alt="fleche-arriere" className={back.backimg}/>
                <span  className={back.backspan}>Back</span>
             </div>
        );
    };
}
export default Back;