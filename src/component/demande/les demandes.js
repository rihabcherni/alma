import React , { Component} from "react";
import FieldsList from "./fieldsList"
import FieldsSelect from "./fieldsSelect"
import Filters from "./filter"

import Request from './request'
import  DemandesCSS  from '../css/demande1.module.css'
import ComposeHeader  from "../communComponent/composeheader";

class Demandes  extends Component{
    render(){  
        return (
        <div>
            <ComposeHeader/>
            <hr className={DemandesCSS.hrDem}/> 
            <div className={DemandesCSS.wrapperDem}>
                    <FieldsList/>
                    <div className={DemandesCSS.rightDem}>
                <FieldsSelect/>
                <Filters/>

                        <div className={DemandesCSS.containerrequest}>
                            <Request/>    
                            <Request/>    
                            <Request/>    
                            <Request/>    
                            <Request/>       
                        </div>
                        <div className={DemandesCSS.Seemore}>
                            <button className={DemandesCSS.Seemorebutton}>SEE MORE</button>
                        </div>  
            </div>
            </div>

          
        </div>
        );
      };
}

export default Demandes;