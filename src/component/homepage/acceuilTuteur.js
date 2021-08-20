import React , { Component ,Fragment} from "react";
import HomeCSS from "../css/home.module.css"
import HomefirstconnexionTuteur from './firstconnexiontuteur'

import '../css/composeheader.module.css'
import Accueil from './accueil'

class AccueilTuteur extends Component{
  render(){

    return (   
        <Fragment>
          
          <main className={HomeCSS.mainhome}>
                <Accueil/>
                <div className={HomeCSS.rightsection}>
                        <HomefirstconnexionTuteur/>
                </div>
          </main>
        </Fragment>
    );
  };
}
export default AccueilTuteur ;