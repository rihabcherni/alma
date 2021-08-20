import React , { Component ,Fragment} from "react";
import HomeCSS from "../css/home.module.css"
import Homefirstconnexionusimpleuser from './firstconnexionSimpleuser'
import Accueil from './accueil'

class AccueilSimpleUser extends Component{
  render(){
    return (   
        <Fragment>
          <main className={HomeCSS.mainhome}>
                <Accueil/>
                <div className={HomeCSS.rightsection}>
                        <Homefirstconnexionusimpleuser/>
                </div>
          </main>
        </Fragment>
    );
  };
}
export default AccueilSimpleUser ;