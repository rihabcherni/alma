import React , { Component} from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SortBy from '../../communComponent/select/sortBy'
import Fields from "../../communComponent/select/fields";
import TypeDoc from "../../communComponent/select/typeDoc";
import Tutor from '../../communComponent/select/tutor'
import AcademicLevel from "../../communComponent/select/acadmiclevel";
import Language from "../../communComponent/select/lang";
import School from "../../communComponent/select/school";
import filterCSS from '../../css/Marketplace.module.css'
import imgfilter from '../../images/filters.PNG'
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({   
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
      }));
export default function FilterMarketplace() {     
      const classes = useStyles();
      function showHideDiv(ele) {
        var srcElement = document.getElementById(ele);
        if (srcElement != null) {
            if (srcElement.style.display == "none") {
                srcElement.style.display = 'flex';
                srcElement.style.gap='1%'
            }
            else {
                srcElement.style.display = 'none';
            }
            return false;
        }
    }
    function showHideDiv2(ele) {
        var srcElement = document.getElementById(ele);
        if (srcElement != null) {
            if (srcElement.style.display == "none") {
                srcElement.style.display = 'block';
               srcElement.style.position = 'absolute';
            }
            else {
                srcElement.style.display = 'none';
            }
            return false;
        }
    }
        return (
            <>
                <div class={filterCSS.rect3market}>
                    <SortBy className={filterCSS.selmarket}/>     
                   <div className={filterCSS.serachcontainer}>
                      <div className={classes.search} style={{backgroundColor:"white", borderRadius:'10px' ,outline:'1px solid #7F7B88',marginTop:'3px', height:'50px'}}>
                            <div className={classes.searchIcon}>
                                <SearchIcon color="action" />
                            </div>
                            <InputBase 
                                placeholder="Search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                style={{padding:"7px"}}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                        </div>
                   </div>              
                  

                    <Fields/>

                    <div class={filterCSS.fil} onClick={()=>showHideDiv('filter')}>
                        <input type="" placeholder="Filters"  aria-invalid="false" style={{ borderRadius:'10px' ,outline:'1px solid #7F7B88',marginTop:'3px', height:'50px'}}/>
                        <img src={imgfilter} alt="filters images"  class="imgfilter"/>
                    </div>

                    <div>
                            <button className={filterCSS.buttonmarket} onClick={()=>showHideDiv2('uploadbtn')}>UPLOAD DOCUMENTS</button>
                            <div class={filterCSS.uploadbtnmarket}  id="uploadbtn">
                              <Link to='/SellDocument' style={{color:'white'}}><p>Document</p></Link>  
                                <hr/>
                                <Link to='/SellDocument' style={{color:'white'}}><p>Request</p></Link> 
                            </div>
                    </div>               
                </div>
                <div class={filterCSS.filtermarket} id="filter">
                     <School/>
                     <TypeDoc/>                   
                     <Tutor/>
                     <AcademicLevel/>
                     <Language/>
                </div> 
      </>
      );
}
