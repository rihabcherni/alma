import React , { Component ,Fragment} from "react";
import requestcss from '../css/Demande.module.css'
import avatar from "../images/avatarUser.ceee5940.svg"
import price from "../images/Groupe 3400.svg"
import stopwatch from "../images/stopwatch (2).svg"

class Request extends Component{
  render(){
    return (   
        <Fragment>
    <div className={requestcss.rectpr}>
                                <div className={requestcss.col1pr}>
                                    <img src={avatar} alt="avatar"/>
                                </div>
                                <div className={requestcss.col2pr}>
                                <p>30 octobre 2020</p>
                                <p>Le manageur: quel rôle, quelle activité? </p>
                                <p>Quelles stratégies pour développer le management du lorem ipsum dolor lorem</p>
                        
                                </div>
                    
                                <div className={requestcss.col3pr}>
                                    <div className={requestcss.imgcol3pr}>
                                        <img src={price} alt="price"/><span>5 - 10 €</span>                            
                                    </div>
                                    <div className={requestcss.imgcol3pr}>
                                        <img src={stopwatch} alt="stopwatch"/> <span>2j 4h</span>                        
                                    </div>
                                </div>
            
                                <div className={requestcss.col5pr}>   
                                    <button>Answer</button>
                                </div>
                                <div className={requestcss.col6pr}>
                                    <p>EN</p>
                                </div>
    </div>
    </Fragment>
    );
  };
}
export default Request ;