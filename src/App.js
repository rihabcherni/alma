import React , { Component} from "react";
import { BrowserRouter as Router, Route, Switch , Redirect } from 'react-router-dom';
import './component/css/glob.css';

import Slide1  from "./component/LANDING PAGE/slide1";
import Slide2  from "./component/LANDING PAGE/slide2";
import Slide3  from "./component/LANDING PAGE/slide3";
import Slide4  from "./component/LANDING PAGE/slide4";

import Faq from '../src/component/Faq';
import Contact from './component/contact';
import Wallet from "./component/wallet";

import BecomeTutorPersonelInofrmation from './component/becomeTutor/BecomeTutorPersonelInofrmation'
import BecomeTutorBackground from './component/becomeTutor/BecomeTutorBackground'
import BecomeTutorExpertise from './component/becomeTutor/BecomeTutorExpertise.js'
import BecomeTutorDocument from './component/becomeTutor/BecomeTutorDocument'
import BecomeTutorDocumentAjouter from './component/becomeTutor/becomeTutorDocumentAjouter'

import Inscription from './component/inscripition/inscp'
import ForgetPASS from './component/inscripition/forgetPASS'
import Sentpsw from './component/inscripition/sentpsw'
import Reinitialiser from './component/inscripition/RÉINITIALISER_MOT_PASSE'

import Resolved from "./component/demande/demande_utilisateur_resolved";
import InPogress from "./component/demande/demandes_utlisateurs_inprogress";
import OffreReponseEncours from "./component/demande/DÉTAIL_DEMANDE_MES_OFFRES_REPONSE_ENCOURS";
import DetailsDemandeEncours from "./component/demande/details_demande_encours";
import DetailsDemandeMesOffres from "./component/demande/details_demande_mes_offres";
import DetailsDemandeResolue from "./component/demande/details_demande_resolue";
import  Demandes from "./component/demande/les demandes";
import Mylibrary from "./component/demande/Mes_demandes_utilisateur_my_library";

import  Checkrequest from"./component/selldocument/checkrequest"
import  Marketplace  from "./component/selldocument/marketplace"
import  Productrequest from"./component/selldocument/productrequest2"
import  SellDocument from "./component/selldocument/sellDocument"

import AccueilSimpleUser from './component/homepage/accueilsimpleuser'
import AccueilTuteur from './component/homepage/acceuilTuteur'

import RechargeCompte from './component/FaireDemande/rechargeCompte'
import FaireDemande from './component/FaireDemande/FaireDemande'

import Setting from './component/setting'
import Packs from './component/packs'
import Test from '../src/component/test'
import ProfileSimpleUser from '../src/component/profilSimpleUser'
import CreditPaimentPacks from '../src/component/packsPaiment'

class App extends Component{
  render(){
    return (
        <Router>
            <div className="App">
              <Switch>
              <Route exact path="/test"  component={Test}/>
            {/*----------------------------Landing pages --------------------------------- */}
                  <Route exact path="/"  component={Slide1}/>
                  <Route path="/slide2"  component={Slide2}/>
                  <Route path="/slide3"  component={Slide3}/>
                  <Route path="/slide4"  component={Slide4}/>

                  <Route path="/Faq" component={Faq}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/wallet" component={Wallet}/>

                  <Route path='/setting' component={Setting}/>
                  <Route path='/packs' component={Packs}/>
                  <Route path='/credit-Paiment-Packs' component={CreditPaimentPacks}/>
                  <Route path='/Profile-SimpleUser' component ={ProfileSimpleUser}/>
            {/*---------------------------------Become tutor ----------------------------- */}
                  <Route path="/BecomeTutor" component={BecomeTutorPersonelInofrmation}/>
                  <Route path="/BecomeTutorBackground" component={BecomeTutorBackground}/>
                  <Route path="/BecomeTutorExpertise" component={BecomeTutorExpertise}/>
                  <Route exact path="/BecomeTutorDocument" component={BecomeTutorDocument}/>
                  <Route  exact path="/BecomeTutor-Document-Ajouter" component={BecomeTutorDocumentAjouter}/>      
             {/* -------------------------------pages Inscription------------------------ */}
             <Route path="/inscr" component={Inscription}/>
                  <Route path="/forgetPASS" component={ForgetPASS}/>
                  <Route path="/sent-reset-password" component={Sentpsw}/>
                  <Route path="/Reinitialiserpassword" component={Reinitialiser}/>                      
             {/* -------------------------------Faire Demande------------------------ */}
                  <Route path="/Make-request" component={FaireDemande}/>
                  <Route path="/rechargeCompte" component={RechargeCompte}/>
             {/* -------------------------------pages demande------------------------ */} 
                  <Route path="/demande_utilisateur_resolved" component={Resolved}/>
                  <Route path="/demandes_utlisateurs_inprogress" component={InPogress}/>
                  <Route path="/details_demande_encours" component={DetailsDemandeEncours}/>
                  <Route path="/details_demande_offres" component={DetailsDemandeMesOffres}/>
                  <Route path="/details_demande_resolue" component={DetailsDemandeResolue}/>  
                  <Route path="/demandes" component={Demandes}/>
                  <Route path="/demandes_utilisateur_library" component={Mylibrary}/>               
             {/*-------------------------------sell document ------------------------- */}
                  <Route path="/checkrequest" component={Checkrequest}/>
                  <Route path="/marketplace" component={Marketplace}/>
                  <Route path="/productrequest" component={Productrequest}/>
                  <Route path="/SellDocument" component={SellDocument}/>  
            {/* ------------------------------  Acceuil ------------------------------ */}   
                  <Route path="/AccueilSimpleUser" component={AccueilSimpleUser}/>  
                  <Route path="/AccueilTuteur" component={AccueilTuteur}/>  
           {/* ------------------------------pages non terminées--------------------- */}
                  <Route path="/DÉTAIL_DEMANDE_OFFRES_REPONSE_ENCOURS" component={OffreReponseEncours}/>
                </Switch>
              
            </div>
        </Router> 
    );
  }
}

export default App;
