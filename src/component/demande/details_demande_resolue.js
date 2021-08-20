import React , { Component} from "react";

import Back from '../communComponent/back'
import ComposeHeader  from "../communComponent/composeheader";
import DRCSS  from  '../css/details_demande.module.css'
import DetailsDemandeResolueRight from './detailDemandeRightResolue'
import DetailsDemandeResolueLeft from './detailDemandeLeftREQUEST'

class DetailsDemandeResolue  extends Component{
    render(){  
        return (
        <>
            <ComposeHeader/>
            <hr className={DRCSS.hrDet}/>
            <Back/>

            <div className={DRCSS.wrapperDet}>
            <div className={DRCSS.leftDet}>
                <div className={DRCSS.requestDet}>
                   <DetailsDemandeResolueLeft/>
                </div>
            </div>
                   <DetailsDemandeResolueRight/>
            </div>
        </>
        );
      };
}

export default DetailsDemandeResolue;