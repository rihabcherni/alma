import React , { Component} from "react";
import HeaderSimple from "./communComponent/Simpleheader";

class Faq extends Component{
  render(){
    return (   
        <div>
          <HeaderSimple/>
          <br/><br/><br/><br/><br/><br/>
            <h1 style={{textAlign:"center" , color:"red"}}> Faq not found!!!!</h1>
        </div>
     );
}
}

export default Faq;