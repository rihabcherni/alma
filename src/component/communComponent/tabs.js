import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  ContainerRequest from '../selldocument/componentselldocument/containerRequest'
import VideMarketplace from '../selldocument/componentselldocument/vide'

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

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <AppBar position="static" style={{backgroundColor:'#99c2ec', padding:'10px 35%'}}>
      
        <Tabs 
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
        >
          <LinkTab label="Documents" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Requests" href="/trash" {...a11yProps(1)} />
        </Tabs>                                            

      </AppBar>
      <TabPanel value={value} index={0}>
                <ContainerRequest/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
                 <VideMarketplace/> 
      </TabPanel>

    </div>
  );
}