import React , { Component, Fragment} from "react";
import Tags from './communComponent/select/multipleLanguage'
import MultipleSelect from'./communComponent/select/multiple'
import DrawerContent from './communComponent/drawer'
import CarouselContainer from './communComponent/carousel'
import SvgIconsColor from './communComponent/moreVert'
import ServerFilterGrid from './communComponent/filter'

import FullWidthTabs from '../../src/component/communComponent/tabsUi'
import NavTabsDesktop from '../component/communComponent/tabsUi'
class Test extends Component{
    render(){
        return (
        <>
            {/* /**
                <Tags/>
                <MultipleSelect/>
                <DrawerContent/>
            <h1 style={{textAlign:"center", color:"red"}}>Contact us not found!!!!</h1>
            <CarouselContainer/>
            <SvgIconsColor/>
            <ServerFilterGrid/>
              */}
               <NavTabsDesktop/>
            </>
        );
        };
    }
    export default Test;