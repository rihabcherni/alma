import React , { Component} from "react";

import Back  from "../communComponent/back";

import ComposeHeader  from "../communComponent/composeheader";
import DRCSS  from  '../css/details_demande.module.css'
import DRightOffre from './detailRightOffres'
import DetailsDemandeResolueLeft from './detailDemandeLeftREQUEST'

class Resolved  extends Component{
    render(){  
        return (
        <div>
                     <ComposeHeader/>
                            <hr className={DRCSS.hrDet}/>
                            <Back/>

                            <div className={DRCSS.wrapperDet}>
                            <div className={DRCSS.leftDet}>
                                <div className={DRCSS.requestDetBlanc}>
                                    <DetailsDemandeResolueLeft/>
                                </div>
                            </div>
                                     <DRightOffre/>
                            </div>
        </div>
        );
      };
}

export default Resolved;