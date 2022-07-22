import React from 'react'
import BodySideBottom from './BodySideBottom';
import { /* BodyBottomNewsOneStyle, */ BodyBottomNewsStyle, BottomNewsFlexStyle } from './BottomBodyStyle'

type BodyBottomNewsProps={
  imageBottomLink:string;
  imageBottom:string;
  linkBottom:string;
  titleBottom:string;
} 
type BodyBottomNewsTwoProps={
  imageBottomLinkTwo:string;
  imageBottomTwo:string;
  linkBottomTwo:string;
  titleBottomTwo:string;
} 

type BodyBottomNewsThreeProps={
  imageBottomLinkThree:string;
  imageBottomThree:string;
  linkBottomThree:string;
  titleBottomThree:string;
} 

type BodyBottomNewsFourProps={
  imageBottomLinkFour:string;
  imageBottomFour:string;
  linkBottomFour:string;
  titleBottomFour:string;
} 


type BodyBottomNewsFiveProps={
  imageBottomLinkFive:string;
  imageBottomFive:string;
  linkBottomFive:string;
  titleBottomFive:string;
}

type BodyBottomNewsSixProps={
  imageBottomLinkSix:string;
  imageBottomSix:string;
  linkBottomSix:string;
  titleBottomSix:string;
}

type BodyBottomNewsSevenProps={
  imageBottomLinkSeven:string;
  imageBottomSeven:string;
  linkBottomSeven:string;
  titleBottomSeven:string;
}

/* type NewsBottomProps = {
  children: React.ReactNode;
};  */

function BodyBottomNews({linkBottom,imageBottom,imageBottomLink,titleBottom}:BodyBottomNewsProps) {
  return (
    
    
      <BodyBottomNewsStyle>
        
        <a href={imageBottomLink}>
          <img src={imageBottom}/>
        </a>
        <p><a href={linkBottom}>{titleBottom}</a></p>
      </BodyBottomNewsStyle>
    
    
  )
}

export default BodyBottomNews


 export function BodyBottomNewsTwo ({imageBottomTwo,imageBottomLinkTwo,linkBottomTwo,titleBottomTwo}: BodyBottomNewsTwoProps){
  return(
   
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkTwo}>
        <img src={imageBottomTwo}/>
      </a>
      <p><a href={linkBottomTwo}>{titleBottomTwo}</a></p>
    </BodyBottomNewsStyle>
 
  )
}  
export function BodyBottomNewsThree ({imageBottomThree,imageBottomLinkThree,linkBottomThree,titleBottomThree}: BodyBottomNewsThreeProps){
  return(
    
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkThree}>
        <img src={imageBottomThree}/>
      </a>
      <p><a href={linkBottomThree}>{titleBottomThree}</a></p>
    </BodyBottomNewsStyle>
 
  )
}  
export function BodyBottomNewsFour ({imageBottomFour,imageBottomLinkFour,linkBottomFour,titleBottomFour}: BodyBottomNewsFourProps){
  return(
   
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkFour}>
        <img src={imageBottomFour}/>
      </a>
      <p><a href={linkBottomFour}>{titleBottomFour}</a></p>
    </BodyBottomNewsStyle>
 
  )
}  

export function BodyBottomNewsFive ({imageBottomFive,imageBottomLinkFive,linkBottomFive,titleBottomFive}: BodyBottomNewsFiveProps){
  return(
    
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkFive}>
        <img src={imageBottomFive}/>
      </a>
      <p><a href={linkBottomFive}>{titleBottomFive}</a></p>
    </BodyBottomNewsStyle>
  
  )
}  

export function BodyBottomNewsSix ({imageBottomSix,imageBottomLinkSix,linkBottomSix,titleBottomSix}: BodyBottomNewsSixProps){
  return(
    
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkSix}>
        <img src={imageBottomSix}/>
      </a>
      <p><a href={linkBottomSix}>{titleBottomSix}</a></p>
    </BodyBottomNewsStyle>
 
  )
}  

export function BodyBottomNewsSeven ({imageBottomSeven ,imageBottomLinkSeven ,linkBottomSeven ,titleBottomSeven }: BodyBottomNewsSevenProps){
  return(
    
    <BodyBottomNewsStyle>
      
      <a href={imageBottomLinkSeven}>
        <img src={imageBottomSeven}/>
      </a>
      <p><a href={linkBottomSeven}>{titleBottomSeven}</a></p>
    </BodyBottomNewsStyle>
 
  )
}  
