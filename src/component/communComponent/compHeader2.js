import React , { Component} from "react";

import Badge from '@material-ui/core/Badge';
import notification from '../images/Groupe 739.svg'

import { createTheme , ThemeProvider } from '@material-ui/core';
import {amber } from '@material-ui/core/colors';
class ComposeHeader2 extends Component{
    render(){   
        const theme = createTheme({
            palette: {
              primary: amber,
              secondary: amber
            },
          }); 
        return (
              <div style={{margin:'0px 100px'}}>
                    <ThemeProvider theme={theme}>
                                <Badge  overlap="circular" badgeContent=" " variant="dot" color="primary" >
                                <img src={notification}  alt='notification'/> 
                                </Badge>
                    </ThemeProvider>                                       
              </div>           
          
        );    
    }
}
export default ComposeHeader2;