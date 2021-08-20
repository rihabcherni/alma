import React , { Component, Fragment} from "react";
import ReactStars from "react-rating-stars-component";

import  PDcss  from '../../css/request.module.css'
class Request extends Component{
    render(){
        return (
        <Fragment>
            <div className={PDcss.requestdiv}>
                    <p className={PDcss.requestp1}>Pseudo Tuteur</p>
                    <p className={PDcss.requestp2}>Le manageur : quel rôle, quelle activité? </p>
                    <p className={PDcss.requestp3}>Quelles stratégies pour développer le management du lorem ipsum
                        dolor lorem développer le management du lorem ipsum dolor lorem</p>

            <div className={PDcss.botrequest}>
                   <ReactStars size={30} isHalf={true}/>

                    <div>
                            <span className={PDcss.requestspan1}>2 pages |</span>
                            <span className={PDcss.requestspan2}>50.00 €</span>
                    </div>       
                </div>
            </div>
        </Fragment>
        );
    };
}
export default Request;