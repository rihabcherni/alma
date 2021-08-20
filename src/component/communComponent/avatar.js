import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {  withStyles } from '@material-ui/core/styles';

import avatr2img from '../images/Groupe 3420.svg'
import avatar from '../images/2251.jpg'

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 52,
    height: 52,
    marginLeft: -60
  },
}))(Avatar);

export  function BadgeAvatars() {
  return (
      <Badge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeContent={<SmallAvatar alt="" src={avatr2img}/>}
      >
                 <Avatar overlap="circular" alt="" src={avatar} style={{width:'160px' , height:'160px'}}/>
      </Badge>

);
}

export default  function Avatars() {
    return (
          <Avatar alt="" src={avatar}/>  
  );
  }