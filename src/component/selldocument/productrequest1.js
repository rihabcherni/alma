import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import ContainerRequest from "./componentselldocument/containerRequest";

import imgp from "../images/Groupe 3744.svg"
import  PDcss  from '../css/Marketplace.module.css'
import ComposerHeader  from "../communComponent/composeheader";

const TabsSell = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "containerReqest1",
    1: "containerReqest2"
  };

  const indexToTabName = {
    containerReqest1: 0,
    containerReqest2: 1
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/tabs1/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <ComposerHeader/>  
                <main className={PDcss.mainprod}>
                    <hr/>
                        <div className={PDcss.rect1market}>
                                    <div className={PDcss.rect1centermarket}> 
                                        <img src={imgp} alt="fausse" className={PDcss.rect1marketimg}/>
                                        <div>
                                            <h1  className={PDcss.rect1marketh1}>Marketplace</h1>
                                            <p  className={PDcss.rect1marketp}>Welcome to the most diverse academic market exchange!<br/>
                                                Here you will have acces to every kind of documents, from a simple
                                                Q&A to the trickiest essay topic!</p>
                                        </div>    
                                    </div> 
                                </div>
                           
                         
                <AppBar position="static">
                  <Tabs value={selectedTab} onChange={handleChange} className={PDcss.rect2market}>
                    <Tab label="Document" className={PDcss.rect2marketa}/>
                    <Tab label="Request" className={PDcss.rect2a} />
                  </Tabs>
                </AppBar>
                <div className={PDcss.rect3market}>
                                <div className={PDcss.selmarket}>
                                        <select  name="" id="">
                                            <option value="">Sort by</option>
                                            <option value="ASC">ASC</option>
                                            <option value="DESC">DESC</option>
                                        </select>
                                </div>
                                            
                                <div className={PDcss.search}>
                                        <input type="search" id="site-search" name="site-search" placeholder="Search" className={PDcss.inputsearchmarket}/>
                                </div>

                                <div className={PDcss.selmarket}>
                                        <select  name="" id="">
                                            <option value="Select a field">Select a field</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                </div>

                                    <div className={PDcss.fil}>
                                        <input type="" placeholder="Filters"  aria-invalid="false"/>
                                        <img src="images/filters.PNG" alt="filters images" className={PDcss.imgfilter}/>
                                    </div>
                                
                                    <div>
                                        <button className={PDcss.buttonmarket}>UPLOAD DOCUMENTS</button>
                                        <div className={PDcss.uploadbtn}  id="uploadbtn">
                                            <p>Document</p>
                                            <hr/>
                                            <p>Request</p>
                                        </div>
                                    </div>
                                    
                                
                                </div>
                                    <div className={PDcss.filtermarket} id="filter">
                                        <div className={PDcss.selmarket}>
                                            <select name="Type of document" id="Type of document">
                                                <option value="Type of document">Type of document</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Tutor" id="Tutor">
                                                <option value="Tutor">Tutor</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Academic level*" id="Academic level*">
                                                <option value="Academic level*">Academic level*</option>
                                            </select>
                                        </div>
                            
                                        <div className={PDcss.selmarket}>
                                            <select name="Language" id="Language">
                                                <option value="Language">Language</option>
                                                <option value="French">French</option>
                                                <option value="English">English</option>
                                                <option value="Arabic">Arabic</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                        </div>
                                    </div> 
                        
                                <div className={PDcss.showingmarket}> 
                                    <p>Showing 1–12 of 53 results</p>
                                </div>
                {selectedTab === 0 && <ContainerRequest />}
                {selectedTab === 1 && <ContainerRequest />}
                </main>

    </>
  );
};

export default TabsSell;