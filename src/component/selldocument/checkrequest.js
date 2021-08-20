import React , { Component, Fragment} from "react";
import imagchech from "../images/test.PNG"

import  CheckRcss  from '../css/checkrequest.module.css'
import ComposerHeader  from "../communComponent/composeheader";
class Checkrequest extends Component{
    render(){
        return (
        <Fragment>
            <ComposerHeader/>  

          <main>
                    <hr/>
                    <div  className={CheckRcss.container}>
                        <p className={CheckRcss.title}>Alma’s team is checking your request</p>
                        <p className={CheckRcss.pargraph}>Once verified, your document will be visible and available for sale in the marketplace!</p>
                        <img src={imagchech} alt="" /><br/>
                        <button className={CheckRcss.buttoncheck}>Back to home page</button>
                    </div>
          </main>
    </Fragment>
              );
            };
        }
export default Checkrequest ;