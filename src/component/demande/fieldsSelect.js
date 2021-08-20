import React , { Component} from "react";
import  FieldsCSS  from '../css/fieldsList.module.css'

class FieldsSelect  extends Component{
    render(){  
        return (
            <div  className={FieldsCSS.fieldselect}>
                        <select>
                            <option value="">Fields</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Art">Art</option>
                            <option value="Biology">Biology</option>
                            <option value="Biomedical & Pharmaceutical Science">Biomedical & Pharmaceutical Science</option>
                            <option value="Business & Management">Business & Management</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Communication">Communication</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Design">Design</option>
                            <option value="Economics">Economics</option>
                            <option value="Engineering">Engineering</option>
                            <option value="English">English</option>
                            <option value="Finance">Finance</option>
                            <option value="Foreign languages">Foreign languages</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="History">History</option>
                            <option value="Humanities">Humanities</option>
                            <option value="Law">Law</option>
                            <option value="Management">Management</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Medical Science">Medical Science</option>
                            <option value="Natural Science">Natural Science</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Physics">Physics</option>
                            <option value="Political Science">Political Science</option>
                            <option value="Programming">Programming</option>
                            <option value="Psychology & Education">Psychology & Education</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Theology">Theology</option>
                            <option value="test">test</option>
                        </select>
             </div>
        );
    };
}
export default FieldsSelect;