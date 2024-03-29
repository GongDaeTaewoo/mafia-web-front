import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import image from '../../assets/images/mafia_icon.svg';
import theme from '../../styles/theme';
import TopRankListView from '../organisms/TopRankListView';

/** @jsxImportSource @emotion/react */


function MainTemplete({className, css}){
const data = [
   
]
const cssObject=emotionCss({},css);
return(
    <TopRankListView
        listItems={data}
        css={cssObject}
        className={className}
    />

)

}
MainTemplete.defaultProps={
    className:'',
    css:emotionCss({})
};

MainTemplete.PropTypes={
    className: PropTypes.string,
    css:PropTypes.objectOf(emotionCss)
};


export default MainTemplete;



