import React , { Component} from "react";
import img1 from '../../images/videimg.PNG'
import FilterMarketplace from './filtermarketplace'
class VideMarketplace extends Component{

    render(){
        return (
        <>
            <FilterMarketplace/>
            <br/> <br/> <br/>
            <div style={{textAlign:'center'}}>
            <img  src={img1} alt='' style= {{width:"200px", height:'200px'}}/>
            <p style={{color:'#355b97', fontSize:'20px', fontFamily:'var(--Roboto)'}}>No result found</p>  
            <p style={{ fontSize:'18px', fontFamily:'var(--Roboto)'}}>We can't seem to find any product that match your search</p>
            <br/> <br/> <br/>
 
        </div>
       </>
        );
    };
}
export default VideMarketplace ;