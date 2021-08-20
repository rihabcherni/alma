
import React , { Component, Fragment} from "react";
import Request from "./request"

import addimg from '../../images/Add.svg'
import  PDcss  from '../../css/Marketplace.module.css'
import FilterMarketplace from "./filtermarketplace";
class ContainerRequest extends Component{
    render(){
        return (
        <Fragment>
            <FilterMarketplace/>     
                    <div className={PDcss.showingmarket}> 
                        <p>Showing 1–12 of 53 results</p>
                    </div>
                <div className={PDcss.containermarket}>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>
                        <Request/>                
                <div className={PDcss.lastlinemarket} >
                        <Request/>
                </div>   
                </div>

                <div className={PDcss.bottommarket}>
                <a href="/productdocument" className={PDcss.linkprevmarket}>
                <img src={addimg} className={PDcss.flechemarket} alt=""/> PREV
                </a>  
                <a href="/productdocument" className={PDcss.linkmarket}>1</a> 
                <a href="/productdocument 2" className={PDcss.linkunderlinemarket}>2</a>

                <a href="/productdocument" className={PDcss.linknextmarket}>
                NEXT<img src={addimg} alt='' />
                </a>
                </div>  
         </Fragment>

        );
    };
}
export default ContainerRequest;