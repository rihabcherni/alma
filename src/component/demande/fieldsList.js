import React , { Component} from "react";
import  FieldsCSS  from '../css/fieldsList.module.css'

class FieldsList  extends Component{
    render(){  
        return (
               <div>
                    <div className={FieldsCSS.leftDem}>
                            <p>Fields</p>
                            <ul className={FieldsCSS.ul} >
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>All</span> <span className={FieldsCSS.nbr}>2435367</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>My fiedls</span> <span className={FieldsCSS.nbr}>76</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Accouting</span> <span className={FieldsCSS.nbr}>187</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Art</span> <span className={FieldsCSS.nbr}>6</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Biologie</span> <span className={FieldsCSS.nbr}>86</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Business & Management</span> <span className={FieldsCSS.nbr}>16</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Engineering</span> <span className={FieldsCSS.nbr}>76</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Computer Science</span> <span className={FieldsCSS.nbr}>6</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Finance</span> <span className={FieldsCSS.nbr}>0</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>History</span> <span className={FieldsCSS.nbr}>2</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Law</span> <span className={FieldsCSS.nbr}>3</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Modern languages</span> <span className={FieldsCSS.nbr}>10</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Middle School/ High School</span> <span className={FieldsCSS.nbr}>76</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Marketing</span> <span className={FieldsCSS.nbr}>56</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Mathematics</span> <span className={FieldsCSS.nbr}>76</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Statistics</span> <span className={FieldsCSS.nbr}>962</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Philosophy</span> <span className={FieldsCSS.nbr}>4546</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Physics</span> <span className={FieldsCSS.nbr}>76</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Chemistry</span> <span className={FieldsCSS.nbr}>72</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Programming</span> <span className={FieldsCSS.nbr}>36</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Psychology & Education</span> <span className={FieldsCSS.nbr}>86</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Theology</span> <span className={FieldsCSS.nbr}>62</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Data Science</span> <span className={FieldsCSS.nbr}>55</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Natural Science</span> <span className={FieldsCSS.nbr}>22</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Political Science</span> <span className={FieldsCSS.nbr}>88</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Biomedical & Pharmaceutical Science</span> <span className={FieldsCSS.nbr}>11</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Medical Science</span> <span className={FieldsCSS.nbr}>13</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Humanties</span> <span className={FieldsCSS.nbr}>12</span></li>
                                <li className={FieldsCSS.li}><span className={FieldsCSS.fields}>Economics</span> <span className={FieldsCSS.nbr}>10</span></li>
                            </ul>
                        </div>
            </div>
        );
    };
}
export default FieldsList;