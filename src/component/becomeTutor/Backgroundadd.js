import React , { Component , Fragment} from "react";
import Fields from "../communComponent/select/fields";
import BackTutor from '../css/Devenir_tuteur_AJOUTER_FORMATION.module.css'
import CustomizedSelects from './progression'
import School from '../communComponent/select/school'
import TypeDegree from '../communComponent/select/typeDegree'
class BackgroundADD extends Component{
  render(){

    return (   
        <Fragment>
            <form action="" method="POST"  className={BackTutor.formBackground}>
                      <div style={{display:'grid', gridTemplateRows:'repeat(2 , 1fr)'}}>
                         <Fields/>
                         <School/>
                      </div>                  
                      <div style={{display:'grid', gridTemplateRows:'repeat(2 , 1fr)',marginLeft:'20px'}}>
                          <TypeDegree/>
                          <CustomizedSelects/>

                      </div>
                </form>
                <hr id="hr" style={{width: "95.8%",border: '2px solid #7F7B88' , visibility:'hidden'}}/>

            </Fragment>
     );
}
}
export default BackgroundADD;