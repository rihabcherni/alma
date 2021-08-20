import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  ContainerRequest from '../selldocument/componentselldocument/containerRequest'
import VideMarketplace from '../selldocument/componentselldocument/vide'
import Resolved from '../demande/demande_utilisateur_resolved'
import InProgress from '../demande/demandes_utlisateurs_inprogress'
import ComposeHeader  from './composeheader';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabsDesktop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <ComposeHeader/>
      <AppBar position="static" style={{backgroundColor:'#99c2ec', padding:'10px 60% 0 1%'}}>
      
        <Tabs 
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
        >
          <LinkTab label="Mes Demandes" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="My Library" href="/trash" {...a11yProps(1)} />
        </Tabs>                                            
      </AppBar>

      
      <TabPanel value={value} index={0} style={{marginTop:'-25px', width:"110%" , marginLeft:"-5%"}}>
              <AppBar position="static" style={{backgroundColor:'white', color:'black', padding:'10px 35%'}}>      
                    <Tabs 
                      variant="fullWidth"
                      value={value}
                      onChange={handleChange}
                      aria-label="nav tabs example"
                      indicatorColor="primary"
                    >
                      <LinkTab label="Solved (2)" href="/solved" {...a11yProps(2)} />
                      <LinkTab label="In progress (4)" href="/prgress" {...a11yProps(3)} />
                    </Tabs>                                            
            </AppBar>
            <TabPanel value={value} index={0}>
                <Resolved/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InProgress/>
            </TabPanel>             
      </TabPanel>


      <TabPanel value={value} index={1}>
                  <AppBar position="static" style={{backgroundColor:'white',  color:'black',padding:'10px 35%'}}>      
                          <Tabs 
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            indicatorColor="primary"
                          >
                            <LinkTab label="Purchased (0)" href="/purchased" {...a11yProps(4)} />
                            <LinkTab label="Up for sale (0)" href="/sale" {...a11yProps(5)} />
                          </Tabs>                                            
                  </AppBar>
                  <TabPanel value={value} index={4}>
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                  </TabPanel>   
      </TabPanel>

    </div>
  );
}
