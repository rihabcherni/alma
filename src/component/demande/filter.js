import React , { Component, Fragment} from "react";
import  FilterCSS  from '../css/filter.module.css'

import searchimg from '../images/Tracé 477.png'
import filterimg from '../images/filters.PNG'


class Filters  extends Component{
    render(){  
            function showHideDiv2(ele) {
            var srcElement = document.getElementById(ele);
            if (srcElement != null) {
                if (srcElement.style.display === "none") {
                    srcElement.style.display = 'flex';   
                }
                else {
                    srcElement.style.display = 'none';
                }
                return false;
            }
        }

        return (
        <Fragment>
             <div className={FilterCSS.ligne1}>
                <div className={FilterCSS.sortby}>
                    <select name="" id="" className={FilterCSS.selectfilter}>
                        <option value="">Sort By</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>

                    </select>
                </div>

                <div className={FilterCSS.search}>
                    <img src={searchimg} alt='imgseracch' className={FilterCSS.searchimg}/>
                    <input type="search" id="site-search" name="site-search" placeholder="Search" className={FilterCSS.inputsearchfil}/>
                </div>

                <div onClick={()=>showHideDiv2('filter')}>
                    <div className={FilterCSS.rectfilter}><span>Filter</span>
                        <img src={filterimg} alt="filters images"  className={FilterCSS.imgfilter}/>
                    </div>
                </div>

                <div>
                 <a href='/Make-request'><button className={FilterCSS.buttonfilter}>MAKE A REQUEST</button></a>  
                </div>
                

                </div>
                <div className={FilterCSS.filter} id="filter">
                <div className={FilterCSS.sel}>
                    <select name="Price" id="Price"  className={FilterCSS.selectfilter}>
                        <option value="Price">Price</option>
                        <option value="0 - 20 €">0 - 20 €</option>
                        <option value="21 - 40 €">21 - 40 €</option>
                        <option value="41 - 60 €">41 - 60 €</option>
                        <option value="61 - 80 €">61 - 80 €</option>

                    </select>
                </div>

                <div className={FilterCSS.sel}>
                    <select name="Select a Timframe" id="Timframe"  className={FilterCSS.selectfilter}>
                        <option value="">Select a Timframe</option>
                    </select>
                </div>

                <div className={FilterCSS.sel}>
                    <select name="Language" id="Language"  className={FilterCSS.selectfilter}>
                        <option value="Language">Select a Language</option>
                        <option value="French">French</option>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
                
                </div> 
         </Fragment>
       );
    };
}
export default Filters;